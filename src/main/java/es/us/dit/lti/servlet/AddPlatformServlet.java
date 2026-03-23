package es.us.dit.lti.servlet;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import es.us.dit.lti.entity.LtiPlatform;
import es.us.dit.lti.entity.Settings;
import es.us.dit.lti.persistence.LtiPlatformDao;

@WebServlet("/admin/addplatform")
public class AddPlatformServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(AddPlatformServlet.class);

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String issuer = request.getParameter("issuer");
        String name = request.getParameter("name");
        String oidcAuthUrl = request.getParameter("oidc_auth_url");
        String jwksUrl = request.getParameter("jwks_url");
        String tokenUrl = request.getParameter("token_url");
        
        if (issuer != null && !issuer.trim().isEmpty()) {
            LtiPlatform platform = new LtiPlatform();
            platform.setIssuer(issuer.trim());
            platform.setName(name);
            platform.setOidcAuthUrl(oidcAuthUrl);
            platform.setJwksUrl(jwksUrl);
            platform.setTokenUrl(tokenUrl);
            
            LtiPlatformDao dao = new LtiPlatformDao();
            boolean created = dao.insert(platform);
            if (created) {
                request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Plataforma añadida con éxito");
            } else {
                request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Error al crear la plataforma");
            }
        }
        
        response.sendRedirect("platforms");
    }
}
