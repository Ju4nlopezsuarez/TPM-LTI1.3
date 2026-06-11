package es.us.dit.lti.servlet;

import java.io.IOException;
import java.util.Map;
import java.util.List;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nimbusds.jwt.SignedJWT;
import com.nimbusds.jwt.JWTClaimsSet;
import com.google.gson.Gson;

import es.us.dit.lti.NrpsService;
import es.us.dit.lti.ToolSession;
import es.us.dit.lti.entity.Consumer;
import es.us.dit.lti.entity.ResourceLink;
import es.us.dit.lti.persistence.ToolLti13Dao;
import es.us.dit.lti.persistence.Lti13ToolConfig;

/**
 * Servlet implementation class to handle manual NRPS synchronization.
 *
 
 * @author Juan López Suárez
*/
@WebServlet("/instructor/syncroster")
public class NrpsSyncServlet extends HttpServlet {

	/**
	 * Serializable requirement.
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Logger.
	 */
	private static final Logger logger = LoggerFactory.getLogger(NrpsSyncServlet.class);

	/**
	 * Processes POST request to synchronize students via NRPS.
	 */
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		final HttpSession session = request.getSession();
		final ToolSession ts = (ToolSession) session.getAttribute(ToolSession.class.getName());
		boolean success = false;
		String errorMessage = "Not available or not instructor";

		List<Map<String, Object>> syncedUsers = null;

		if (ts != null && ts.isInstructor()) {
			String idToken = (String) session.getAttribute("lti13_id_token");
			if (idToken != null) {
				try {
					ToolLti13Dao lti13Dao = new ToolLti13Dao();
					Lti13ToolConfig config = lti13Dao.findByClientId(ts.getLti13ClientId());
					if (config != null) {
						SignedJWT parsedJWT = SignedJWT.parse(idToken);
						JWTClaimsSet claims = parsedJWT.getJWTClaimsSet();
						Map<String, Object> nrpsClaim = claims
								.getJSONObjectClaim("https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice");
						if (nrpsClaim != null && nrpsClaim.containsKey("context_memberships_url")) {
							String contextMembershipsUrl = (String) nrpsClaim.get("context_memberships_url");

							String clientIdNrps = config.getClientId();
							String tokenUrlNrps = config.getTokenUrl();
							Consumer consumerNrps = ts.getConsumer();
							ResourceLink resLinkNrps = ts.getResourceLink();

							syncedUsers = NrpsService.syncRoster(contextMembershipsUrl, clientIdNrps, tokenUrlNrps,
									consumerNrps,
									resLinkNrps);
							if (syncedUsers != null) {
								success = true;
								errorMessage = null;
							} else {
								errorMessage = "Error during NRPS sync";
							}
						} else {
							errorMessage = "NRPS claim not found in token";
						}
					} else {
						errorMessage = "LTI 1.3 config not found";
					}
				} catch (Exception e) {
					logger.error("Error executing manual NRPS sync", e);
					errorMessage = "Internal error during sync";
				}
			} else {
				errorMessage = "No LTI 1.3 token in session";
			}
		}

		response.setContentType("application/json");
		if (success) {
			String usersJson = new Gson().toJson(syncedUsers);
			response.getWriter().write("{\"success\": true, \"users\": " + usersJson + "}");
		} else {
			response.getWriter().write("{\"success\": false, \"error\": \"" + errorMessage + "\"}");
		}
	}
}
