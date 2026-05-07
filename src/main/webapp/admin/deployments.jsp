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
                <script src="js/lists.js"></script>
            </head>
            <% request.setCharacterEncoding("UTF-8"); if (mgmtUser !=null && (mgmtUser.getType()==MgmtUserType.SUPER ||
                mgmtUser.getType()==MgmtUserType.ADMIN)) { @SuppressWarnings("unchecked") List<LtiDeployment>
                deployments = (List<LtiDeployment>) request.getAttribute("deployments");
                    %>

                    <body>
                        <%@include file="/WEB-INF/includes/cabecera.jsp" %>
                            <div class="h1container dialog">
                                <h1>
                                    <a href="platforms" accesskey="x"><span
                                            class="material-icons bcerrar">arrow_back</span></a>
                                    Despliegues LTI 1.3 (Instituciones)
                                </h1>
                                <p>Listado de instalaciones (Deployment IDs) descubiertas dinámicamente.</p>

                                <form id="formulario" method="get" action="">
                                <div class="scroll50">
                                    <% if (deployments==null || deployments.isEmpty()) { %>
                                        <p>No hay Deployment IDs registrados.</p>
                                        <% } else { %>
                                            <table aria-label="despliegues" id="deployments">
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">ID Base de Datos</th>
                                                    <th scope="col">Client ID (Padre)</th>
                                                    <th scope="col">Deployment ID (Institución)</th>
                                                </tr>
                                                <% boolean first = true; %>
                                                <% for (LtiDeployment d : deployments) { %>
                                                    <tr>
                                                        <td class='seleccionar'>
                                                            <input type='radio' name='id' value='<%=d.getId()%>' required <%= first ? "checked" : "" %>>
                                                        </td>
                                                        <td>
                                                            <%= d.getId() %>
                                                        </td>
                                                        <td class='deploymentname'>
                                                            <%= d.getClientIdPk() %>
                                                        </td>
                                                        <td style="font-family: monospace;">
                                                            <%= Encode.forHtml(d.getDeploymentId()) %>
                                                        </td>
                                                    </tr>
                                                    <% first = false; %>
                                                    <% } %>
                                            </table>
                                            <% } %>
                                </div>
                                <br />
                                <div class="centrado">
                                    <input type='button' id='bdelete' value='Borrar Despliegue' class="accionp" disabled="disabled"
                                           data-action="DeleteDeploymentServlet"
                                           data-confirm="¿Borrar este Deployment ID? Esa institución concreta perderá el acceso a las herramientas." />
                                </div>
                                </form>
                            </div>
                    </body>

            </html>
            <% } %>