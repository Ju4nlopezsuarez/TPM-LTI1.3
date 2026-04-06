package es.us.dit.lti.servlet;

import es.us.dit.lti.entity.Tool;
import es.us.dit.lti.persistence.ToolDao;
import es.us.dit.lti.persistence.ToolLti13Dao;
import es.us.dit.lti.ToolSession;
import es.us.dit.lti.MessageMap;

import com.nimbusds.jwt.SignedJWT;
import com.nimbusds.jwt.JWTClaimsSet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Locale;

@WebServlet("/SaveLinkServlet")
public class SaveLinkServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String toolName = request.getParameter("toolname");
        String resourceLinkId = (String) request.getSession().getAttribute("pending_resource_link_id");

        if (resourceLinkId == null) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST,
                    "Sesión caducada. Por favor, vuelva a lanzar la herramienta desde el LMS.");
        } else {
            // Validar que la clave (toolname) existe en tu TPM usando tu ToolDao original
            Tool tool = ToolDao.get(toolName);

            if (tool == null) {
                // La clave introducida es incorrecta
                request.setAttribute("error_clave",
                        "Error: La clave de herramienta introducida no existe en el sistema.");
                request.getRequestDispatcher("/link_setup.jsp").forward(request, response);
            } else {
                // Guardar la asociación en la base de datos LTI 1.3
                ToolLti13Dao dao = new ToolLti13Dao();
                boolean saved = dao.saveResourceLinkMapping(resourceLinkId, toolName);

                if (saved) {
                    // Limpiar sesión y notificar éxito
                    request.getSession().removeAttribute("pending_resource_link_id");

                    String idToken = (String) request.getSession().getAttribute("lti13_id_token");
                    if (idToken != null) {
                        try {
                            SignedJWT parsedToken = SignedJWT.parse(idToken);
                            JWTClaimsSet claims = parsedToken.getJWTClaimsSet();

                            ToolSession ts = new ToolSession();
                            ts.initLti13(claims);

                            Locale locale = request.getLocale();
                            if (ts.getPresentationLocale() != null) {
                                locale = Locale.forLanguageTag(ts.getPresentationLocale());
                            }
                            MessageMap text = new MessageMap(locale);

                            if (ts.isValid()) {
                                HttpSession session = request.getSession(true);
                                session.setAttribute(ToolSession.class.getName(), ts);
                                session.setAttribute("text", text);
                                session.setAttribute("mappedToolName", toolName);

                                response.sendRedirect(response.encodeRedirectURL(ts.getContinueUrl()));
                            } else {
                                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                                        "Error validando datos LTI tras vinculación.");
                            }
                        } catch (Exception e) {
                            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                                    "Error al procesar el token para redirección: " + e.getMessage());
                        }
                    } else {
                        request.setAttribute("success_msg",
                                "El enlace se ha vinculado correctamente. Por favor, cierre o retroceda en esta ventana y vuelva a pulsar el enlace desde el curso (Aula Virtual) para acceder.");
                        request.getRequestDispatcher("/link_setup.jsp").forward(request, response);
                    }
                } else {
                    response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
                            "Error en la base de datos al intentar guardar el enlace.");
                }
            }
        }
    }
}