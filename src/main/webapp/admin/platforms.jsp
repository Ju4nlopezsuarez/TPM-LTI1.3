<%@page import="es.us.dit.lti.entity.MgmtUserType,org.owasp.encoder.Encode" %>
    <%@page import="es.us.dit.lti.entity.LtiPlatform,java.util.List" %>
        <%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
            <jsp:useBean id="mgmtUser" type="es.us.dit.lti.entity.MgmtUser" scope="session" />
            <!DOCTYPE html>
            <html lang="es">

            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" type="text/css" href="../css/style.css">
                <title>Gestión de Plataformas</title>
                <script src="../js/move.js"></script>
            </head>
            <% request.setCharacterEncoding("UTF-8"); if (mgmtUser !=null && (mgmtUser.getType()==MgmtUserType.SUPER ||
                mgmtUser.getType()==MgmtUserType.ADMIN)) { @SuppressWarnings("unchecked") List<LtiPlatform> platforms =
                (List<LtiPlatform>) request.getAttribute("platforms");
                    %>

                    <body>
                        <%@include file="/WEB-INF/includes/cabecera.jsp" %>
                            <div class="h1container dialog" style="max-width: 90%;">
                                <h1>
                                    <a href="../user/menu.jsp" accesskey="x"><span
                                            class="material-icons bcerrar">close</span></a>
                                    Plataformas LTI 1.3
                                </h1>

                                <p>Listado de LMS de confianza.
                                    <a href="addplatform.jsp"><strong>[+ Añadir nueva plataforma]</strong></a>
                                </p>
                                <p>
                                    <a href="ListClientsServlet"><strong>[Ver Clientes Descubiertos]</strong></a> |
                                    <a href="ListDeploymentsServlet"><strong>[Ver Despliegues Descubiertos]</strong></a>
                                </p>

                                <div class="scroll50">
                                    <% if (platforms==null || platforms.isEmpty()) { %>
                                        <p>No hay plataformas LTI 1.3 registradas en el sistema.</p>
                                        <% } else { %>
                                            <table style="width: 100%; text-align: left; border-collapse: collapse;">
                                                <tr style="border-bottom: 2px solid #ccc;">
                                                    <th style="padding: 8px;">ID</th>
                                                    <th style="padding: 8px;">Nombre</th>
                                                    <th style="padding: 8px;">Issuer (Emisor)</th>
                                                    <th style="padding: 8px;">Acciones</th>
                                                </tr>
                                                <% for (LtiPlatform p : platforms) { %>
                                                    <tr style="border-bottom: 1px solid #eee;">
                                                        <td style="padding: 8px;">
                                                            <%= p.getId() %>
                                                        </td>
                                                        <td style="padding: 8px;"><strong>
                                                                <%= Encode.forHtml(p.getName()) %>
                                                            </strong></td>
                                                        <td style="padding: 8px;">
                                                            <%= Encode.forHtml(p.getIssuer()) %>
                                                        </td>
                                                        <td style="padding: 8px;">
                                                            <a href="EditPlatformServlet?id=<%= p.getId() %>"
                                                                style="color: #1976D2; text-decoration: none; margin-right: 10px;">[Editar]</a>
                                                            <a href="deleteplatform.jsp?id=<%= p.getId() %>&name=<%= Encode.forUriComponent(p.getName()) %>"
                                                                style="color: #D32F2F; text-decoration: none;">[Borrar]</a>
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