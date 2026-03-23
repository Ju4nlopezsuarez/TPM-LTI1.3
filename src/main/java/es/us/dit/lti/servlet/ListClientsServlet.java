package es.us.dit.lti.servlet;

import java.io.IOException;
import java.util.List;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import es.us.dit.lti.entity.LtiClient;
import es.us.dit.lti.persistence.LtiClientDao;

@WebServlet("/admin/clients")
public class ListClientsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        LtiClientDao dao = new LtiClientDao();
        List<LtiClient> clients = dao.findAll(); 
        request.setAttribute("clients", clients);
        
        request.getRequestDispatcher("clients.jsp").forward(request, response);
    }
}