<%@page import="es.us.dit.lti.entity.MgmtUserType,org.owasp.encoder.Encode" %>
    <%@page import="es.us.dit.lti.entity.LtiClient,java.util.List" %>
        <%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
            <jsp:useBean id="mgmtUser" type="es.us.dit.lti.entity.MgmtUser" scope="session" />
            <!DOCTYPE html>
            <html lang="es">

            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" type="text/css" href="../css/style.css">
                <title>Gestión de Clientes (Client IDs)</title>
                <script src="../js/move.js"></script>
            </head>
            <% request.setCharacterEncoding("UTF-8"); if (mgmtUser !=null && (mgmtUser.getType()==MgmtUserType.SUPER ||
                mgmtUser.getType()==MgmtUserType.ADMIN)) { @SuppressWarnings("unchecked") List<LtiClient> clients =
                (List<LtiClient>) request.getAttribute("clients");
                    %>

                    <body>
                        <%@include file="/WEB-INF/includes/cabecera.jsp" %>
                            <div class="h1container dialog" style="max-width: 90%;">
                                <h1>
                                    <a href="ListPlatformsServlet" accesskey="x"><span
                                            class="material-icons bcerrar">arrow_back</span></a>
                                    Clientes LTI 1.3 Descubiertos
                                </h1>
                                <p>Listado de Client IDs registrados dinámicamente en el sistema.</p>

                                <div class="scroll50">
                                    <% if (clients==null || clients.isEmpty()) { %>
                                        <p>No hay Client IDs registrados.</p>
                                        <% } else { %>
                                            <table style="width: 100%; text-align: left; border-collapse: collapse;">
                                                <tr style="border-bottom: 2px solid #ccc;">
                                                    <th style="padding: 8px;">ID Base de Datos</th>
                                                    <th style="padding: 8px;">Platform ID (Padre)</th>
                                                    <th style="padding: 8px;">Client ID (LMS)</th>
                                                    <th style="padding: 8px;">Acciones</th>
                                                </tr>
                                                <% for (LtiClient c : clients) { %>
                                                    <tr style="border-bottom: 1px solid #eee;">
                                                        <td style="padding: 8px;">
                                                            <%= c.getId() %>
                                                        </td>
                                                        <td style="padding: 8px;">
                                                            <%= c.getPlatformId() %>
                                                        </td>
                                                        <td style="padding: 8px; font-family: monospace;">
                                                            <%= Encode.forHtml(c.getClientId()) %>
                                                        </td>
                                                        <td style="padding: 8px;">
                                                            <a href="DeleteClientServlet?id=<%= c.getId() %>"
                                                                style="color: #D32F2F; text-decoration: none;"
                                                                onclick="return confirm('¿Borrar este Client ID? Se perderá la conexión con todas las instituciones que lo usen.');">[Borrar
                                                                Cliente]</a>
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