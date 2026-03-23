package es.us.dit.lti.servlet;

import java.io.IOException;
import java.util.List;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import es.us.dit.lti.entity.LtiDeployment;
import es.us.dit.lti.persistence.LtiDeploymentDao;

@WebServlet("/admin/deployments")
public class ListDeploymentsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        LtiDeploymentDao dao = new LtiDeploymentDao();
        List<LtiDeployment> deployments = dao.findAll();
        request.setAttribute("deployments", deployments);
        
        request.getRequestDispatcher("deployments.jsp").forward(request, response);
    }
}