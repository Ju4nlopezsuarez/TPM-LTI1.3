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
                <script src="js/lists.js"></script>
            </head>
            <% request.setCharacterEncoding("UTF-8"); if (mgmtUser !=null && (mgmtUser.getType()==MgmtUserType.SUPER ||
                mgmtUser.getType()==MgmtUserType.ADMIN)) { @SuppressWarnings("unchecked") List<LtiPlatform> platforms =
                (List<LtiPlatform>) request.getAttribute("platforms");
                    %>

                    <body>
                        <%@include file="/WEB-INF/includes/cabecera.jsp" %>
                            <div class="h1container dialog">
                                <h1>
                                    <a href="../user/menu.jsp" accesskey="x"><span
                                            class="material-icons bcerrar">close</span></a>
                                    Plataformas LTI 1.3
                                </h1>
                                <a href="addplatform.jsp"> <span id="add" class="material-icons">add</span></a>

                                <h2>Listado de LMS de confianza</h2>
                                <form id="formulario" method="get" action="" accept-charset="UTF-8">
                                <div class="scroll50">
                                    <% if (platforms==null || platforms.isEmpty()) { %>
                                        <p>No hay plataformas LTI 1.3 registradas en el sistema.</p>
                                        <% } else { %>
                                            <table aria-label="plataformas" id="platforms">
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Nombre</th>
                                                    <th scope="col">Issuer</th>
                                                </tr>
                                                <% boolean first = true; %>
                                                <% for (LtiPlatform p : platforms) { %>
                                                    <tr>
                                                        <td class='seleccionar'>
                                                            <input type='radio' name='id' value='<%=p.getId()%>' required <%= first ? "checked" : "" %>>
                                                            <input type='hidden' id='name_<%=p.getId()%>' value='<%=Encode.forHtmlAttribute(p.getName())%>' disabled>
                                                        </td>
                                                        <td>
                                                            <%= p.getId() %>
                                                        </td>
                                                        <td class='platformname'>
                                                            <%= Encode.forHtml(p.getName()) %>
                                                        </td>
                                                        <td>
                                                            <%= Encode.forHtml(p.getIssuer()) %>
                                                        </td>
                                                    </tr>
                                                    <% first = false; %>
                                                    <% } %>
                                            </table>
                                            <% } %>
                                </div>
                                <br />
                                <div class="centrado">
                                    <input type='button' id='bedit' value='Editar' class="accionp" disabled="disabled" accesskey="e"/>
                                    <input type='button' id='bdelete' value='Borrar' class="accionp" disabled="disabled"/>
                                    <br /><br />
                                    <input type='button' id='bclients' value='Ver Clientes' class="accionp" />
                                    <input type='button' id='bdeployments' value='Ver Despliegues' class="accionp" />
                                </div>
                                </form>
                            </div>
                    </body>

            </html>
            <% } %>