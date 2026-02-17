package es.us.dit.lti.servlet;

import es.us.dit.lti.persistence.KeyService;
import com.nimbusds.jose.jwk.JWKSet;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Endpoint público que expone el conjunto de claves (JWK Set) del TPM.
 * El LMS consultará esta URL para verificar las firmas de los mensajes que enviamos.
 * Requisito LTI 1.3: Security Framework.
 */
@WebServlet("/jwks.json") // La URL->http://tu-servidor/tpm/jwks.json
public class JWKSServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        
        
        //resp.setHeader("Cache-Control", "max-age=3600"); 

        try (PrintWriter out = resp.getWriter()) {
            
            KeyService keyService = new KeyService();
            
            JWKSet publicKeys = keyService.getPublicJWKSet();
            
            out.print(publicKeys.toJSONObject().toString());
            
        } catch (Exception e) {
            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            e.printStackTrace();
        }
    }
}