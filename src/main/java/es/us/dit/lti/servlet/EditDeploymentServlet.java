package es.us.dit.lti.servlet;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import es.us.dit.lti.entity.LtiDeployment;
import es.us.dit.lti.entity.Settings;
import es.us.dit.lti.persistence.LtiDeploymentDao;

@WebServlet("/admin/editdeployment")
public class EditDeploymentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(EditDeploymentServlet.class);

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String idStr = request.getParameter("id");
        String clientIdPkStr = request.getParameter("client_id_pk");
        String deploymentId = request.getParameter("deployment_id");
        
        if (idStr != null && clientIdPkStr != null && deploymentId != null && !deploymentId.trim().isEmpty()) {
            try {
                int id = Integer.parseInt(idStr);
                int clientIdPk = Integer.parseInt(clientIdPkStr);
                
                LtiDeployment deployment = new LtiDeployment();
                deployment.setId(id);
                deployment.setClientIdPk(clientIdPk);
                deployment.setDeploymentId(deploymentId.trim());
                
                LtiDeploymentDao dao = new LtiDeploymentDao();
                boolean updated = dao.update(deployment);
                
                if (updated) {
                    request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Deployment ID actualizado con éxito");
                } else {
                    request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Error al actualizar el Deployment ID");
                }
            } catch (NumberFormatException e) {
                logger.error("Invalid ID format", e);
                request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "ID inválido");
            }
        }
        
        response.sendRedirect("platforms");
    }
}
