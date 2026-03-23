package es.us.dit.lti.servlet;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import es.us.dit.lti.entity.LtiClient;
import es.us.dit.lti.entity.Settings;
import es.us.dit.lti.persistence.LtiClientDao;

@WebServlet("/super/editclient")
public class EditClientServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(EditClientServlet.class);

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String idStr = request.getParameter("id");
        String platformIdStr = request.getParameter("platform_id");
        String clientId = request.getParameter("client_id");
        
        if (idStr != null && platformIdStr != null && clientId != null && !clientId.trim().isEmpty()) {
            try {
                int id = Integer.parseInt(idStr);
                int platformId = Integer.parseInt(platformIdStr);
                
                LtiClient client = new LtiClient();
                client.setId(id);
                client.setPlatformId(platformId);
                client.setClientId(clientId.trim());
                
                LtiClientDao dao = new LtiClientDao();
                boolean updated = dao.update(client);
                
                if (updated) {
                    request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Client ID actualizado con éxito");
                } else {
                    request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Error al actualizar el Client ID");
                }
            } catch (NumberFormatException e) {
                logger.error("Invalid ID format", e);
                request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "ID inválido");
            }
        }
        
        response.sendRedirect("platforms");
    }
}
