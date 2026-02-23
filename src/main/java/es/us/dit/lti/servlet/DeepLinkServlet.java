package es.us.dit.lti.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import es.us.dit.lti.ToolSession;
import es.us.dit.lti.SecurityUtil;
import es.us.dit.lti.persistence.KeyService;
import com.nimbusds.jose.jwk.RSAKey;

/**
 * Servlet encargado de procesar la selección del profesor en Deep Linking
 * y retornar el JWT firmado al LMS.
 */
@WebServlet("/DeepLinkServlet")
public class DeepLinkServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(DeepLinkServlet.class);

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        ToolSession ts = (ToolSession) request.getSession().getAttribute(ToolSession.class.getName());

        if (ts == null || !ts.isDeepLinking()) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Sesión inválida o no es un lanzamiento de Deep Linking.");
        } else {
            String title = request.getParameter("title");
            String customArgs = request.getParameter("custom_args");
            
            // Asignar un 'kid' por defecto o recogerlo de la configuración si lo tienes parametrizado
            String kid = "tpm-key-1"; 
            
            String jwtResponse = null;

            try {
                // Recuperamos la clave privada
                KeyService keyService = new KeyService();
                RSAKey rsaKey = keyService.getPrivateKey(kid);
                
                if (rsaKey != null) {
                    jwtResponse = SecurityUtil.createDeepLinkingResponseJWT(
                        ts.getLti13ClientId(), 
                        ts.getConsumer().getGuid(), // Issuer
                        ts.getLti13DeploymentId(), 
                        ts.getDeepLinkData(), 
                        title, 
                        customArgs, 
                        rsaKey.toRSAPrivateKey(), 
                        kid
                    );
                } else {
                    logger.error("DeepLinking Error: No se encontró clave privada para el kid: " + kid);
                }
            } catch (Exception e) {
                logger.error("Error procesando DeepLinkServlet", e);
            }

            if (jwtResponse != null) {
                // Renderizar un formulario HTML autoejecutable que mande el JWT al LMS
                response.setContentType("text/html;charset=UTF-8");
                PrintWriter out = response.getWriter();
                out.println("<!DOCTYPE html>");
                out.println("<html><head><title>Retornando al LMS...</title></head><body>");
                out.println("<h3>Configuración guardada. Redirigiendo al LMS...</h3>");
                out.println("<form id='dl_form' action='" + ts.getDeepLinkReturnUrl() + "' method='POST'>");
                out.println("<input type='hidden' name='JWT' value='" + jwtResponse + "' />");
                out.println("</form>");
                out.println("<script>document.getElementById('dl_form').submit();</script>");
                out.println("</body></html>");
                out.close();
                
                // Limpiar la sesión si se desea (opcional)
                request.getSession().removeAttribute(ToolSession.class.getName());
            } else {
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error interno generando la firma criptográfica.");
            }
        }
    }
}