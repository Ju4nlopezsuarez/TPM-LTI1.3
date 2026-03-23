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

@WebServlet("/admin/adddeployment")
public class AddDeploymentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(AddDeploymentServlet.class);

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String clientIdPkStr = request.getParameter("client_id_pk");
        String deploymentId = request.getParameter("deployment_id");
        
        if (clientIdPkStr != null && deploymentId != null && !deploymentId.trim().isEmpty()) {
            try {
                int clientIdPk = Integer.parseInt(clientIdPkStr);
                LtiDeployment deployment = new LtiDeployment();
                deployment.setClientIdPk(clientIdPk);
                deployment.setDeploymentId(deploymentId.trim());
                
                LtiDeploymentDao dao = new LtiDeploymentDao();
                boolean created = dao.insert(deployment);
                
                if (created) {
                    request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Deployment ID añadido con éxito");
                } else {
                    request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Error al crear el Deployment ID");
                }
            } catch (NumberFormatException e) {
                logger.error("Invalid client ID PK format", e);
                request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "ID de cliente inválido");
            }
        }
        
        response.sendRedirect("platforms");
    }
}
