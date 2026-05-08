<%@page import="es.us.dit.lti.entity.MgmtUserType,org.owasp.encoder.Encode" %>
    <%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
        <jsp:useBean id="mgmtUser" type="es.us.dit.lti.entity.MgmtUser" scope="session" />
        <!DOCTYPE html>
        <html lang="es">

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" type="text/css" href="../css/style.css">
            <title>Eliminar Plataforma</title>
            <script src="../js/move.js"></script>
        </head>
        <% request.setCharacterEncoding("UTF-8"); String idStr=request.getParameter("id"); String
            nameStr=request.getParameter("name"); if (mgmtUser !=null && (mgmtUser.getType()==MgmtUserType.SUPER ||
            mgmtUser.getType()==MgmtUserType.ADMIN)) { if (idStr !=null) { %>

            <body>
                <%@include file="/WEB-INF/includes/cabecera.jsp" %>
                    <div class="h1container dialog">
                        <h1>
                            <a href="platforms" accesskey="x"><span
                                    class="material-icons bcerrar">close</span></a>
                            Confirmar Eliminación
                        </h1>

                        <p>¿Está seguro de que desea eliminar la plataforma <strong>
                                <%= (nameStr !=null) ? Encode.forHtml(nameStr) : "seleccionada" %>
                            </strong>?</p>

                        <form method="post" action="DeletePlatformServlet">
                            <input type="hidden" name="launchId" value="${launchId}" />
                            <input type="hidden" name="id" value="<%= Encode.forHtmlAttribute(idStr) %>" />
                            <div class="centrado">
                                <input class="accionp" type="submit" value="Sí, Eliminar"/>
                                <input type="button" value="Cancelar" onclick="window.location.href='platforms'" class="accionp">
                            </div>
                        </form>
                    </div>
            </body>

        </html>
        <% } } %>