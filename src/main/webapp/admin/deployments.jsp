<%@page import="es.us.dit.lti.entity.MgmtUserType,org.owasp.encoder.Encode" %>
    <%@page import="es.us.dit.lti.entity.LtiDeployment,java.util.List" %>
        <%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
            <jsp:useBean id="mgmtUser" type="es.us.dit.lti.entity.MgmtUser" scope="session" />
            <!DOCTYPE html>
            <html lang="es">

            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" type="text/css" href="../css/style.css">
                <title>Gestión de Despliegues (Deployment IDs)</title>
                <script src="../js/move.js"></script>
            </head>
            <% request.setCharacterEncoding("UTF-8"); if (mgmtUser !=null && (mgmtUser.getType()==MgmtUserType.SUPER ||
                mgmtUser.getType()==MgmtUserType.ADMIN)) { @SuppressWarnings("unchecked") List<LtiDeployment>
                deployments = (List<LtiDeployment>) request.getAttribute("deployments");
                    %>

                    <body>
                        <%@include file="/WEB-INF/includes/cabecera.jsp" %>
                            <div class="h1container dialog" style="max-width: 90%;">
                                <h1>
                                    <a href="platforms" accesskey="x"><span
                                            class="material-icons bcerrar">arrow_back</span></a>
                                    Despliegues LTI 1.3 (Instituciones)
                                </h1>
                                <p>Listado de instalaciones (Deployment IDs) descubiertas dinámicamente.</p>

                                <div class="scroll50">
                                    <% if (deployments==null || deployments.isEmpty()) { %>
                                        <p>No hay Deployment IDs registrados.</p>
                                        <% } else { %>
                                            <table style="width: 100%; text-align: left; border-collapse: collapse;">
                                                <tr style="border-bottom: 2px solid #ccc;">
                                                    <th style="padding: 8px;">ID Base de Datos</th>
                                                    <th style="padding: 8px;">Client ID (Padre)</th>
                                                    <th style="padding: 8px;">Deployment ID (Institución)</th>
                                                    <th style="padding: 8px;">Acciones</th>
                                                </tr>
                                                <% for (LtiDeployment d : deployments) { %>
                                                    <tr style="border-bottom: 1px solid #eee;">
                                                        <td style="padding: 8px;">
                                                            <%= d.getId() %>
                                                        </td>
                                                        <td style="padding: 8px;">
                                                            <%= d.getClientId() %>
                                                        </td>
                                                        <td style="padding: 8px; font-family: monospace;">
                                                            <%= Encode.forHtml(d.getDeploymentId()) %>
                                                        </td>
                                                        <td style="padding: 8px;">
                                                            <a href="DeleteDeploymentServlet?id=<%= d.getId() %>"
                                                                style="color: #D32F2F; text-decoration: none;"
                                                                onclick="return confirm('¿Borrar este Deployment ID? Esa institución concreta perderá el acceso a las herramientas.');">[Borrar
                                                                Despliegue]</a>
                                                        </td>
                                                    </tr>
                                                    <% } %>
                                            </table>
                                            <% } %>
                                </div>
                            </div>
                    </body>

            </html>
            <% } %>