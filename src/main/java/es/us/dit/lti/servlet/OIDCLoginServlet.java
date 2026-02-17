package es.us.dit.lti.servlet;

import es.us.dit.lti.persistence.ToolLti13Dao;  
import es.us.dit.lti.persistence.Lti13ToolConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.UUID;

/**
 * Maneja el flujo de inicio de sesión iniciado por terceros (Third-party Initiated Login).
 * Paso 1 del lanzamiento LTI 1.3.
 */
@WebServlet("/login_init")
public class OIDCLoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        handleLogin(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        handleLogin(req, resp);
    }
    private void handleLogin(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        // Recoger parámetros obligatorios del LMS
        String iss = req.getParameter("iss");               
        String login_hint = req.getParameter("login_hint"); 
        String target_link_uri = req.getParameter("target_link_uri"); 
        String lti_message_hint = req.getParameter("lti_message_hint");
        
        // Validación básica
        if (iss == null || login_hint == null || target_link_uri == null) {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Faltan parámetros OIDC obligatorios (iss, login_hint, target_link_uri).");
            
        } else {
            // Buscar configuración usando el DAO (Refactorizado)
            // Instanciamos el DAO y llamamos al método findByIssuer
            ToolLti13Dao dao = new ToolLti13Dao();
            Lti13ToolConfig config = dao.findByIssuer(iss);

            if (config == null) {
                resp.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Herramienta no registrada para el Issuer: " + iss);
            } else {

                //Parámetros de seguridad (State y Nonce)
                String state = UUID.randomUUID().toString();
                String nonce = UUID.randomUUID().toString();
        
                
                req.getSession().setAttribute("lti_state", state);
                req.getSession().setAttribute("lti_nonce", nonce);

                // Construir la URL de redirección
                String authUrl = config.getOidcAuthUrl(); 
        
                StringBuilder redirectUrl = new StringBuilder(authUrl);
                redirectUrl.append(authUrl.contains("?") ? "&" : "?");
                redirectUrl.append("scope=openid"); 
                redirectUrl.append("&response_type=id_token");
                redirectUrl.append("&client_id=").append(URLEncoder.encode(config.getClientId(), StandardCharsets.UTF_8));
                redirectUrl.append("&redirect_uri=").append(URLEncoder.encode(target_link_uri, StandardCharsets.UTF_8));
                redirectUrl.append("&login_hint=").append(URLEncoder.encode(login_hint, StandardCharsets.UTF_8));
                redirectUrl.append("&state=").append(state);
                redirectUrl.append("&nonce=").append(nonce);
        
                if (lti_message_hint != null) {
                    redirectUrl.append("&lti_message_hint=").append(URLEncoder.encode(lti_message_hint, StandardCharsets.UTF_8));
                }
        
                //Redirigir al navegador
                resp.sendRedirect(redirectUrl.toString());
            }
        }
    }
    
}

