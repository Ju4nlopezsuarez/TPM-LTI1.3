package es.us.dit.lti.servlet;

import java.io.IOException;
import java.util.Locale;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;

import es.us.dit.lti.MessageMap;
import es.us.dit.lti.SecurityUtil;
import es.us.dit.lti.ToolSession;
import es.us.dit.lti.entity.MgmtUser;
import es.us.dit.lti.persistence.Lti13ToolConfig;
import es.us.dit.lti.persistence.ToolLti13Dao;

/**
 * Servlet for receiving initial tool request. LTI initial contact URL.
 * Supports both LTI 1.1 (Legacy) and LTI 1.3 (Advantage).
 *
 * @author Francisco José Fernández Jiménez
 */
@WebServlet("/tools")
public class LtiServlet extends HttpServlet {
    
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(LtiServlet.class);

    /**
     * Processes LTI request.
     * Acts as a dispatcher between LTI 1.1 and LTI 1.3 logic.
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");

        String idToken = request.getParameter("id_token");
        String oauthConsumerKey = request.getParameter("oauth_consumer_key");

        if (idToken != null) {
            
            handleLti13(request, response, idToken);
        } else if (oauthConsumerKey != null) {
            
            handleLti11(request, response);
        } else {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid LTI Request: Missing id_token or oauth_consumer_key.");
        }
    }

    /**
     * Maneja el flujo de lanzamiento LTI 1.3 (OIDC + JWT).
     */
    private void handleLti13(HttpServletRequest request, HttpServletResponse response, String idToken) throws IOException {
        try {
            
            // Debemos comprobar que el state recibido coincide con el que generamos en OIDCLoginServlet
            String receivedState = request.getParameter("state");
            String storedState = (String) request.getSession().getAttribute("lti_state");

            // Si no hay state en sesión o no coinciden, es un posible ataque
            if (storedState == null || !storedState.equals(receivedState)) {
                logger.error("LTI 1.3 CSRF Error: State mismatch or session expired.");
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Security Error: Invalid State (CSRF). Try refreshing the LMS page.");
                
            }else{
            
            // Limpiamos el state de la sesión
            request.getSession().removeAttribute("lti_state");

            // Obtener el ISS (Issuer)
            SignedJWT parsedToken = SignedJWT.parse(idToken);
            String issuer = parsedToken.getJWTClaimsSet().getIssuer();
            java.util.List<String> audiences = parsedToken.getJWTClaimsSet().getAudience();
            if (audiences == null || audiences.isEmpty()) {
                logger.error("LTI 1.3 Error: Missing audience in ID Token.");
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid ID Token: Missing audience.");
            }else{
                String clientId = audiences.get(0); // Normalmente el Client ID es el primer elemento de la audiencia
                ToolLti13Dao dao = new ToolLti13Dao();
                Lti13ToolConfig config = dao.findByClientId(clientId);

            if (config == null || !config.getIssuer().equals(issuer)) {
                logger.error("LTI 1.3 Error: Unknown Configuration for client_id {} and issuer {}", clientId, issuer);
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Tool not configured for Issuer: " + issuer);
                
            }else {

        
            // Usamos SecurityUtil para descargar las claves del LMS y verificar
            JWTClaimsSet claims = SecurityUtil.validateLti13Token(idToken,config.getJwksUrl(), issuer,config.getClientId());
            String storedNonce= (String) request.getSession().getAttribute("lti_nonce");
            String tokenNonce= claims.getStringClaim("nonce");
            if(storedNonce==null || !storedNonce.equals(tokenNonce)) {
                logger.error("Nonce mismatch or session expired.");
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid Nonce (CSRF). Try refreshing the LMS page.");
                
            }else {
            // Limpiamos el nonce de la sesión
            request.getSession().removeAttribute("lti_nonce");       
            
            
            // Inicializar ToolSession con los datos de LTI 1.3
            final ToolSession ts = new ToolSession();
            // Le pasamos los claims (JSON) para que extraiga user_id, roles, context, etc.
            ts.initLti13(claims); 

            // Lógica de presentación y redirección (Similar a LTI 1.1)
            Locale locale = request.getLocale();
            if (ts.getPresentationLocale() != null) {
                locale = Locale.forLanguageTag(ts.getPresentationLocale());
            }
            final MessageMap text = new MessageMap(locale);

            if (ts.isValid()) {
                // Guardamos el token en sesión para futuras llamadas
                final HttpSession session = request.getSession(true);
                session.setAttribute(ToolSession.class.getName(), ts);
                session.setAttribute("text", text);
                
                // Guardamos el ID Token crudo por si necesitamos hacer llamadas a APIs del LMS
                session.setAttribute("lti13_id_token", idToken);

                response.sendRedirect(response.encodeRedirectURL(ts.getContinueUrl()));
            } else {
                handleError(response, ts, text);
            }
		}
		}
    }
		
    }
        } catch (Exception e) {
            logger.error("LTI 1.3 Launch Error", e);
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "LTI 1.3 Validation Failed: " + e.getMessage());
        }
    }

    private void handleLti11(HttpServletRequest request, HttpServletResponse response) {
        try {
            final ToolSession ts = new ToolSession();
            ts.init(request); 
            
            Locale locale = request.getLocale();
            if (ts.getPresentationLocale() != null) {
                locale = Locale.forLanguageTag(ts.getPresentationLocale());
            }
            final MessageMap text = new MessageMap(locale);
            
            if (ts.isValid()) {
                final HttpSession session = request.getSession(true);
                session.setAttribute(ToolSession.class.getName(), ts);
                session.setAttribute("text", text);
                response.sendRedirect(response.encodeRedirectURL(ts.getContinueUrl()));
            } else {
                handleError(response, ts, text);
            }
        } catch (final IOException e) {
            logger.error("IO Error in LTI 1.1 Launch.", e);
        }
    }

    /**
     * Helper para manejar la redirección de errores.
     */
    private void handleError(HttpServletResponse response, ToolSession ts, MessageMap text) throws IOException {
        String url = ts.getLtiReturnUrl();
        String error = ts.getError();
        if (error == null) {
            error = "T_LTI_DEFAULT_ERROR";
        }
        if (url != null) {
            if (url.indexOf("?") >= 0) {
                url += '&';
            } else {
                url += '?';
            }
            url += "lti_errormsg=" + ToolSession.urlEncode(text.get(error));
            response.sendRedirect(url);
        } else if (ts.getError() != null) {
            response.sendRedirect("./error.jsp?errorMessage=" + ToolSession.urlEncode(text.get(error)));
        }
    }

    /**
     * Processes LTI logout.
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final HttpSession session = request.getSession(false);
        try {
            if (session != null) {
                MgmtUser mgmtUser = (MgmtUser) session.getAttribute("mgmtUser");
                if (mgmtUser == null) {
                    session.invalidate();
                } else {
                    session.removeAttribute(ToolSession.class.getName());
                }
            } else {
                response.sendError(HttpServletResponse.SC_NOT_FOUND);
            }
        } catch (final IOException e) {
            logger.error("IO Error.", e);
        }
    }
}