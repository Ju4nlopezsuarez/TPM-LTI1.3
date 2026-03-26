package es.us.dit.lti.servlet;

import es.us.dit.lti.persistence.ToolLti13Dao;
import es.us.dit.lti.persistence.Lti13ToolConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.UUID;
import es.us.dit.lti.persistence.LtiPlatformDao;
import es.us.dit.lti.persistence.LtiClientDao;
import es.us.dit.lti.persistence.LtiDeploymentDao;
import es.us.dit.lti.entity.LtiPlatform;
import es.us.dit.lti.entity.LtiClient;
import es.us.dit.lti.entity.LtiDeployment;

/**
 * Maneja el flujo de inicio de sesión iniciado por terceros (Third-party
 * Initiated Login).
 * Paso 1 del lanzamiento LTI 1.3.
 */
@WebServlet("/oidc_login")
public class OIDCLoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        handleLogin(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        handleLogin(req, resp);
    }

    private void handleLogin(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        // Recoger parámetros obligatorios del LMS
        String iss = req.getParameter("iss");
        String login_hint = req.getParameter("login_hint");
        String target_link_uri = req.getParameter("target_link_uri");
        String lti_message_hint = req.getParameter("lti_message_hint");
        String client_id = req.getParameter("client_id");
        String deployment_id = req.getParameter("lti_deployment_id");

        // Validación básica
        if (iss == null || login_hint == null || target_link_uri == null || client_id == null) {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST,
                    "Faltan parámetros OIDC obligatorios (iss, login_hint, target_link_uri, client_id).");

        } else {
            // Buscamos la plataforma
            LtiPlatformDao ltiPlatformDao = new LtiPlatformDao();
            LtiPlatform ltiPlatform = ltiPlatformDao.findByIssuer(iss);
            if (ltiPlatform == null) {
                resp.sendError(HttpServletResponse.SC_UNAUTHORIZED,
                        "Acceso Denegado: Plataforma LTI no registrada en el TPM.");

            } else {
                // Extraemos la URL de autenticación OIDC de la Plataforma
                String oidcAuthUrl = ltiPlatform.getOidcAuthUrl();
                // Descubrimos los clientes
                LtiClientDao clientDao = new LtiClientDao();
                LtiClient client = clientDao.findByPlatformAndClientId(ltiPlatform.getId(), client_id);
                if (client == null) {
                    client = new LtiClient();
                    client.setPlatformId(ltiPlatform.getId());
                    client.setClientId(client_id);
                    clientDao.insert(client);

                    // Lo recuperamos para obtener su id autogenerado
                    client = clientDao.findByPlatformAndClientId(ltiPlatform.getId(), client_id);
                    System.out.println("Cliente descubierto e insertado: " + client.getId());
                }
                if (deployment_id != null && client != null) {
                    LtiDeploymentDao ltiDeploymentDao = new LtiDeploymentDao();
                    LtiDeployment ltiDeployment = ltiDeploymentDao.findByClientIdAndDeploymentId(client.getId(),
                            deployment_id);
                    if (ltiDeployment == null) {
                        ltiDeployment = new LtiDeployment();
                        ltiDeployment.setClientIdPk(client.getId());
                        ltiDeployment.setDeploymentId(deployment_id);
                        ltiDeploymentDao.insert(ltiDeployment);
                        System.out.println("Nuevo Despliegue descubierto: " + deployment_id);
                        
                    }
                }
                // Seguridad
                String state = UUID.randomUUID().toString();
                String nonce = UUID.randomUUID().toString();
                req.getSession().setAttribute("lti_state", state);
                req.getSession().setAttribute("lti_nonce", nonce);
                // Redireción
                StringBuilder redirectUrl = new StringBuilder(oidcAuthUrl);
                redirectUrl.append(oidcAuthUrl.contains("?") ? "&" : "?");
                redirectUrl.append("scope=openid");
                redirectUrl.append("&response_type=id_token");
                redirectUrl.append("&response_mode=form_post");
                redirectUrl.append("&prompt=none");
                redirectUrl.append("&client_id=").append(URLEncoder.encode(client_id, StandardCharsets.UTF_8));
                redirectUrl.append("&redirect_uri=").append(URLEncoder.encode(target_link_uri, StandardCharsets.UTF_8));
                redirectUrl.append("&login_hint=").append(URLEncoder.encode(login_hint, StandardCharsets.UTF_8));
                redirectUrl.append("&state=").append(state);
                redirectUrl.append("&nonce=").append(nonce);
                if (lti_message_hint != null) {
                    redirectUrl.append("&lti_message_hint=")
                            .append(URLEncoder.encode(lti_message_hint, StandardCharsets.UTF_8));
                }
                // Enviar al alumno de vuelta al LMS para autenticarse
                resp.sendRedirect(redirectUrl.toString());

            }

        }
    }

}
