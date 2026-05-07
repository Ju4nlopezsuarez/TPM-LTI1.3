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
                <script src="js/lists.js"></script>
            </head>
            <% request.setCharacterEncoding("UTF-8"); if (mgmtUser !=null && (mgmtUser.getType()==MgmtUserType.SUPER ||
                mgmtUser.getType()==MgmtUserType.ADMIN)) { @SuppressWarnings("unchecked") List<LtiClient> clients =
                (List<LtiClient>) request.getAttribute("clients");
                    %>

                    <body>
                        <%@include file="/WEB-INF/includes/cabecera.jsp" %>
                            <div class="h1container dialog">
                                <h1>
                                    <a href="platforms" accesskey="x"><span
                                            class="material-icons bcerrar">arrow_back</span></a>
                                    Clientes LTI 1.3 Descubiertos
                                </h1>
                                <p>Listado de Client IDs registrados dinámicamente en el sistema.</p>

                                <form id="formulario" method="get" action="">
                                <div class="scroll50">
                                    <% if (clients==null || clients.isEmpty()) { %>
                                        <p>No hay Client IDs registrados.</p>
                                        <% } else { %>
                                            <table aria-label="clientes" id="clients">
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col">Client ID</th>
                                                </tr>
                                                <% boolean first = true; %>
                                                <% for (LtiClient c : clients) { %>
                                                    <tr>
                                                        <td class='seleccionar'>
                                                            <input type='radio' name='id' value='<%=c.getId()%>' required <%= first ? "checked" : "" %>>
                                                        </td>
                                                        <td class='clientname'>
                                                            <%= Encode.forHtml(c.getClientId()) %>
                                                        </td>
                                                    </tr>
                                                    <% first = false; %>
                                                    <% } %>
                                            </table>
                                            <% } %>
                                </div>
                                <br />
                                <div class="centrado">
                                    <input type='button' id='bdelete' value='Borrar Cliente' class="accionp" disabled="disabled" data-action="DeleteClientServlet"/>
                                </div>
                                </form>
                            </div>
                    </body>

            </html>
            <% } %>