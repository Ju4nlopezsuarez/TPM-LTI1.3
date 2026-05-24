/*
    This file is part of Tool Provider Manager - Manager of LTI Tool Providers
    for learning platforms.
    Copyright (C) 2022  Francisco José Fernández Jiménez.

    Tool Provider Manager is free software: you can redistribute it and/or
    modify it under the terms of the GNU General Public License as published
    by the Free Software Foundation, either version 3 of the License, or (at
    your option) any later version.

    Tool Provider Manager is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
    Public License for more details.

    You should have received a copy of the GNU General Public License along
    with Tool Provider Manager. If not, see <https://www.gnu.org/licenses/>.
*/

package es.us.dit.lti.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.ExclusionStrategy;
import com.google.gson.FieldAttributes;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import es.us.dit.lti.SecurityUtil;
import es.us.dit.lti.ToolSession;
import es.us.dit.lti.config.ToolUiConfig;
import es.us.dit.lti.entity.Attempt;
import es.us.dit.lti.entity.LtiUser;
import es.us.dit.lti.entity.Tool;
import es.us.dit.lti.entity.ToolKey;
import es.us.dit.lti.persistence.ToolAttemptDao;
import es.us.dit.lti.persistence.ToolConsumerUserDao;

/**
 * Servlet implementation class to list attempts and list LTI user that had
 * attempts, with same tool key.
 */
@WebServlet({ "/learner/listattempts", "/instructor/listattempts", "/instructor/users" })
public class ListAttemptsServlet extends HttpServlet {
	/**
	 * Serializable requirement.
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * Logger.
	 */
	private static final Logger logger = LoggerFactory.getLogger(InfoLtiUserServlet.class);

	/**
	 * GSON strategy for excluding details.
	 */
	private static final ExclusionStrategy strategyUsers = new ExclusionStrategy() {
		/**
		 * Excludes serial ID, updated, and created fields.
		 */
		@Override
		public boolean shouldSkipField(FieldAttributes field) {
			boolean res = false;
			if (field.getName().equals("sid") || field.getName().equals("updated")
					|| field.getName().equals("created")) {
				res = true;
			}
			return res;
		}

		/**
		 * Do not exclude full classes.
		 */
		@Override
		public boolean shouldSkipClass(Class<?> clazz) {
			return false;
		}
	};

	/**
	 * Processes GET request for get current user attempts or list of LTI users that
	 * had attempts with the same tool key.
	 * 
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		final HttpSession session = request.getSession();
		final ToolSession ts = (ToolSession) session.getAttribute(ToolSession.class.getName());
		final String userId = ts.getSessionUserId();
		final Tool tool = ts.getTool();
		PrintWriter out;
		try {
			out = response.getWriter();
		} catch (final IOException e) {
			logger.error("IO Error.", e);
			return;
		}
		if (tool != null) {
			final ToolUiConfig tui = tool.getToolUiConfig();
			if (request.getServletPath().startsWith("/instructor/users") && tui.isManageAttempts()) {
				// list of users
				response.setContentType("application/json");
				final Gson gson = new GsonBuilder().addSerializationExclusionStrategy(strategyUsers).create();
				String currentResourceId = null;
				if (ts.getResourceLink() != null) {
					currentResourceId = ts.getResourceLink().getResourceId();
				}
				out.append(gson.toJson(getLtiUsers(ts.getToolKey(), tui.getManageAttemptsExcludeUsers(), currentResourceId)));

			} else if (request.getServletPath().startsWith("/learner/listattempts") && userId != null
					&& (tui.isShowAttempts() || tui.isManageAttempts() && ts.isInstructor())) {
				// list of current user attempts
				response.setContentType("application/json");
				String currentResourceId = null;
				if (ts.getResourceLink() != null) {
					currentResourceId = ts.getResourceLink().getResourceId();
				}
				if (currentResourceId != null && !currentResourceId.isEmpty()) {
					out.append(new Gson().toJson(getAttemptsByResource(ts.getToolKey(), ts.getLtiResourceUser().getUser(), currentResourceId)));
				} else {
					out.append(new Gson().toJson(getAttempts(ts.getToolKey(), ts.getLtiResourceUser().getUser())));
				}

			} else {
				response.setStatus(HttpServletResponse.SC_FORBIDDEN);
				response.setContentType("text/html");
				try {
					request.getRequestDispatcher("/errorlogin.html").include(request, response);
				} catch (ServletException | IOException e) {
					logger.error("IO Error.", e);
				}
			}
		}
	}

	/**
	 * Processes POST request for list attempt of other LTI users that had attempts
	 * with the current tool key.
	 *
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			request.setCharacterEncoding("UTF-8");
		} catch (final UnsupportedEncodingException e1) {
			// never
			logger.error("UTF-8", e1);
		}
		// Only for instructors
		final HttpSession session = request.getSession();
		final ToolSession ts = (ToolSession) session.getAttribute(ToolSession.class.getName());
		final Tool tool = ts.getTool();
		final String userId = request.getParameter("userId");
		logger.info("ListAttemptsServlet doPost received userId parameter: '{}'", userId);
		if (request.getServletPath().startsWith("/instructor/listattempts") && tool != null && userId != null
				&& tool.getToolUiConfig().isManageAttempts()) {
			response.setContentType("application/json");
			try {
				// userId can be * or a comma-separated list, excluding "exclude users"
				final List<String> excludeUsers = tool.getToolUiConfig().getManageAttemptsExcludeUsers();
				String currentResourceId = null;
				if (ts.getResourceLink() != null) {
					currentResourceId = ts.getResourceLink().getResourceId();
				}

				if (userId.equals("*")) {
					final List<Attempt> attempts;
					if (currentResourceId != null && !currentResourceId.isEmpty()) {
						attempts = ToolAttemptDao.getToolKeyAttempts(ts.getToolKey(), currentResourceId);
					} else {
						attempts = ToolAttemptDao.getToolKeyAttempts(ts.getToolKey());
					}
					if (excludeUsers != null) {
						attempts.removeIf(a -> excludeUsers.indexOf(a.getResourceUser().getUser().getSourceId()) >= 0);
					}
					response.getWriter().append(new Gson().toJson(convertToAttemptInfo(attempts)));

				} else {
					List<String> userIdList;

					if (excludeUsers == null) {
						userIdList = Arrays.asList(userId.trim().split("\\s*,\\s*"));
					} else {
						userIdList = new ArrayList<>();
						for (final String id : userId.trim().split("\\s*,\\s*")) {
							if (excludeUsers.indexOf(id) < 0) {
								userIdList.add(id);
							}
						}
					}
					logger.info("Parsed userIdList: {}", userIdList);
					final List<AttemptInfo> attempts = new ArrayList<>();
					for (final String c : userIdList) {
						logger.info("Calling getToolKeyLtiUsersByUserId with c: '{}'", c);
						final List<LtiUser> users = ToolConsumerUserDao.getToolKeyLtiUsersByUserId(ts.getToolKey(), c);
						logger.info("getToolKeyLtiUsersByUserId returned {} users", users.size());
						for (final LtiUser u : users) {
							if (currentResourceId != null && !currentResourceId.isEmpty()) {
								attempts.addAll(getAttemptsByResource(ts.getToolKey(), u, currentResourceId));
							} else {
								attempts.addAll(getAttempts(ts.getToolKey(), u));
							}
						}
					}
					response.getWriter().append(new Gson().toJson(attempts));
				}

			} catch (final IOException e) {
				logger.error("IO Error.", e);
			}
		} else {
			response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			try {
				request.getRequestDispatcher("/errorlogin.html").include(request, response);
			} catch (ServletException | IOException e) {
				logger.error("IO Error.", e);
			}
		}
	}

	/**
	 * Gets a list of LTI users that had attempts with the same tool key.
	 *
	 * @param tk           the tool key
	 * @param excludeUsers LTI users that must not been shown
	 * @return the list of LTI users
	 */
	private List<LtiUser> getLtiUsers(ToolKey tk, List<String> excludeUsers, String currentResourceId) {
		logger.info("getLtiUsers called with excludeUsers: {}, currentResourceId: {}", excludeUsers, currentResourceId);
		final List<LtiUser> filteredUsers = new ArrayList<>();
		if (excludeUsers == null) {
			excludeUsers = new ArrayList<>();
		}

		final List<LtiUser> users;
		if (currentResourceId != null && !currentResourceId.isEmpty()) {
			users = ToolConsumerUserDao.getToolKeyLtiUsersByResource(tk, currentResourceId);
			logger.info("ToolConsumerUserDao.getToolKeyLtiUsersByResource returned {} users", users.size());
		} else {
			users = ToolConsumerUserDao.getToolKeyLtiUsers(tk);
			logger.info("ToolConsumerUserDao.getToolKeyLtiUsers returned {} users", users.size());
		}
		for (final LtiUser u : users) {
			logger.info("Checking user: userId='{}', sourceId='{}', nameFull='{}'", u.getUserId(), u.getSourceId(), u.getNameFull());
			if (excludeUsers.indexOf(u.getSourceId()) < 0) {
				filteredUsers.add(u);
			} else {
				logger.info("User excluded because sourceId '{}' is in excludeUsers list", u.getSourceId());
			}
		}

		logger.info("getLtiUsers returning {} filtered users", filteredUsers.size());
		return filteredUsers;
	}

	/**
	 * Gets the attempts of a LTI users for a tool key.
	 *
	 * @param tk   the tool key
	 * @param user the LTI user
	 * @return list of attempts
	 */
	private List<AttemptInfo> getAttempts(ToolKey tk, LtiUser user) {
		final List<Attempt> attempts = ToolAttemptDao.getUserAttempts(user, tk);
		return convertToAttemptInfo(attempts);
	}

	/**
	 * Gets the attempts of a LTI user for a tool key and specific resource link.
	 *
	 * @param tk         the tool key
	 * @param user       the LTI user
	 * @param resourceId the resource link ID
	 * @return list of attempts
	 */
	private List<AttemptInfo> getAttemptsByResource(ToolKey tk, LtiUser user, String resourceId) {
		final List<Attempt> attempts = ToolAttemptDao.getUserAttemptsByResource(user, tk, resourceId);
		return convertToAttemptInfo(attempts);
	}

	/**
	 * Converts a list of {@link Attempt} objects to a list of {@link AttemptInfo}
	 * objects.
	 * 
	 * @param attempts list of {@link Attempt} objects
	 * @return list of {@link AttemptInfo} objects
	 */
	private List<AttemptInfo> convertToAttemptInfo(List<Attempt> attempts) {
		final List<AttemptInfo> infos = new ArrayList<>();

		for (final Attempt a : attempts) {
			final AttemptInfo i = new AttemptInfo();

			i.setFileName(a.getFileName());
			i.setWithFile(a.isFileSaved());
			i.setWithOutput(a.isOutputSaved());
			i.setUserId(a.getResourceUser().getUser().getUserId());
			i.setScore(a.getScore());
			i.setErrorCode(a.getErrorCode());
			i.setTimestamp(DateTimeFormatter.ISO_INSTANT.format(a.getInstant()));
			i.setSid(SecurityUtil.getSecureSid(a));
			i.setId(a.getId());

			infos.add(i);
		}

		return infos;
	}

}
