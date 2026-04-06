<%@page import="es.us.dit.lti.entity.MgmtUserType,org.owasp.encoder.Encode" %>
    <%@page import="es.us.dit.lti.entity.LtiPlatform" %>
        <%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
            <jsp:useBean id="mgmtUser" type="es.us.dit.lti.entity.MgmtUser" scope="session" />
            <!DOCTYPE html>
            <html lang="es">

            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" type="text/css" href="../css/style.css">
                <title>Editar Plataforma</title>
                <script src="../js/move.js"></script>
            </head>
            <% request.setCharacterEncoding("UTF-8"); if (mgmtUser !=null && (mgmtUser.getType()==MgmtUserType.SUPER ||
                mgmtUser.getType()==MgmtUserType.ADMIN)) { LtiPlatform platform=(LtiPlatform)
                request.getAttribute("platform"); if (platform !=null) { %>

                <body>
                    <%@include file="/WEB-INF/includes/cabecera.jsp" %>
                        <div class="h1container dialog">
                            <h1>
                                <a href="platforms" accesskey="x"><span
                                        class="material-icons bcerrar">close</span></a>
                                Editar Plataforma
                            </h1>

                            <form method="post" action="editplatform" accept-charset="UTF-8">
                                <input type="hidden" name="launchId" value="${launchId}" />
                                <input type="hidden" name="id" value="<%= platform.getId() %>" />

                                <div class="scroll50">
                                    <p><label for="name">Nombre descriptivo:</label><br />
                                        <input type="text" name="name"
                                            value="<%= Encode.forHtmlAttribute(platform.getName()) %>"
                                            required="required" style="width: 90%;" />
                                    </p>

                                    <p><label for="issuer">Issuer (Identificador del Emisor):</label><br />
                                        <input type="text" name="issuer"
                                            value="<%= Encode.forHtmlAttribute(platform.getIssuer()) %>"
                                            required="required" style="width: 90%;" />
                                    </p>

                                    <p><label for="oidcAuthUrl">OIDC Auth URL:</label><br />
                                        <input type="url" name="oidc_auth_url"
                                            value="<%= Encode.forHtmlAttribute(platform.getOidcAuthUrl()) %>"
                                            required="required" style="width: 90%;" />
                                    </p>

                                    <p><label for="jwksUrl">JWKS URL (Claves Públicas):</label><br />
                                        <input type="url" name="jwks_url"
                                            value="<%= Encode.forHtmlAttribute(platform.getJwksUrl()) %>"
                                            required="required" style="width: 90%;" />
                                    </p>

                                    <p><label for="tokenUrl">Token URL (OAuth2):</label><br />
                                        <input type="url" name="token_url"
                                            value="<%= Encode.forHtmlAttribute(platform.getTokenUrl()) %>"
                                            required="required" style="width: 90%;" />
                                    </p>
                                </div>
                                <div class="centrado">
                                    <input class="accionp" type="submit" value="Actualizar Datos" />
                                </div>
                            </form>
                        </div>
                </body>

            </html>
            <% } } %>