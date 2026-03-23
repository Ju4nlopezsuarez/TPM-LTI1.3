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
import es.us.dit.lti.persistence.LtiPlatformDao;

@WebServlet("/super/deleteplatform")
public class DeletePlatformServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(DeletePlatformServlet.class);

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String idStr = request.getParameter("id");
        if (idStr != null) {
            try {
                int id = Integer.parseInt(idStr);
                LtiPlatformDao dao = new LtiPlatformDao();
                boolean deleted = dao.delete(id);

                if (deleted) {
                    request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Plataforma eliminada con éxito");
                } else {
                    request.getSession().setAttribute(Settings.PENDING_MSG_ATTRIB, "Error al eliminar la plataforma");
                }
            } catch (NumberFormatException e) {
                logger.error("Invalid platform ID format", e);
            }
        }

        response.sendRedirect("platforms");
    }
}
