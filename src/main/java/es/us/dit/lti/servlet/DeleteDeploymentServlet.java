package es.us.dit.lti.servlet;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import es.us.dit.lti.entity.Settings;
import es.us.dit.lti.persistence.LtiDeploymentDao;

@WebServlet("/super/deletedeployment")
public class DeleteDeploymentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(DeleteDeploymentServlet.class);

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String idStr = request.getParameter("id");
        if (idStr != null) {
            try {
                int id = Integer.parseInt(idStr);
                LtiDeploymentDao dao = new LtiDeploymentDao();
                boolean deleted = dao.delete(id);

                if (deleted) {
                    request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Deployment ID eliminado con éxito");
                } else {
                    request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Error al eliminar el Deployment ID");
                }
            } catch (NumberFormatException e) {
                logger.error("Invalid deployment ID format", e);
            }
        }

        response.sendRedirect("platforms");
    }
}
