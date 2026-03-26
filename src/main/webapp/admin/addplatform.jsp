<%@page import="es.us.dit.lti.entity.MgmtUserType,org.owasp.encoder.Encode" %>
    <%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
        <jsp:useBean id="mgmtUser" type="es.us.dit.lti.entity.MgmtUser" scope="session" />
        <!DOCTYPE html>
        <html lang="es">

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" type="text/css" href="../css/style.css">
            <title>Añadir Plataforma</title>
            <script src="../js/move.js"></script>
        </head>
        <% request.setCharacterEncoding("UTF-8"); if (mgmtUser !=null && (mgmtUser.getType()==MgmtUserType.SUPER ||
            mgmtUser.getType()==MgmtUserType.ADMIN)) { %>

            <body>
                <%@include file="/WEB-INF/includes/cabecera.jsp" %>
                    <div class="h1container dialog">
                        <h1>
                            <a href="ListPlatformsServlet" accesskey="x"><span
                                    class="material-icons bcerrar">close</span></a>
                            Nueva Plataforma LTI 1.3
                        </h1>

                        <p>Introduzca los identificadores y parámetros de seguridad públicos del LMS.</p>

                        <form method="post" action="addplatform" accept-charset="UTF-8">
                            <div class="scroll50">
                                <p><label for="name">Nombre descriptivo:</label><br />
                                    <input type="text" name="name" required="required" style="width: 90%;"
                                        placeholder="Ej: Blackboard US" />
                                </p>

                                <p><label for="issuer">Issuer (URL del Emisor):</label><br />
                                    <input type="url" name="issuer" required="required" style="width: 90%;"
                                        placeholder="https://..." />
                                </p>

                                <p><label for="oidcAuthUrl">OIDC Auth URL:</label><br />
                                    <input type="url" name="oidc_auth_url" required="required" style="width: 90%;" />
                                </p>

                                <p><label for="jwksUrl">JWKS URL (Claves Públicas):</label><br />
                                    <input type="url" name="jwks_url" required="required" style="width: 90%;" />
                                </p>

                                <p><label for="tokenUrl">Token URL (OAuth2):</label><br />
                                    <input type="url" name="token_url" required="required" style="width: 90%;" />
                                </p>
                            </div>
                            <div class="centrado">
                                <input class="accionp" type="submit" value="Guardar Plataforma" />
                            </div>
                        </form>
                    </div>
            </body>

        </html>
        <% } %>