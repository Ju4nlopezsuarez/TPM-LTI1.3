package es.us.dit.lti.servlet;

import java.io.IOException;
import java.util.List;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import es.us.dit.lti.entity.LtiPlatform;
import es.us.dit.lti.persistence.LtiPlatformDao;

@WebServlet("/admin/platforms")
public class ListPlatformsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(ListPlatformsServlet.class);

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        LtiPlatformDao dao = new LtiPlatformDao();
        List<LtiPlatform> platforms = dao.findAll();
        request.setAttribute("platforms", platforms);
        
        try {
            request.getRequestDispatcher("platforms.jsp").forward(request, response);
        } catch (ServletException | IOException e) {
            logger.error("Error forwarding.", e);
        }
    }
}
