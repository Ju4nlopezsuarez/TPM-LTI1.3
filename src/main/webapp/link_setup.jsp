<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vincular Herramienta LTI 1.3</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/material-icons.css">
</head>
<body>
    <div class="h1container">
        <h1>Vincular Nuevo Enlace LTI 1.3</h1>
        
        <p style="margin-bottom: 20px;">
            El sistema ha reconocido la plataforma, pero <strong>este enlace concreto de su asignatura aún no está asociado a ninguna herramienta</strong> de corrección.
        </p>
        <p style="margin-bottom: 20px; color: #555;">
            Por favor, introduzca la clave identificadora (Toolname) de la herramienta a la que desea apuntar este enlace. Esta acción solo se realiza una vez.
        </p>

        <% if (request.getAttribute("error_clave") != null) { %>
            <div style="color: #D32F2F; margin-bottom: 15px; font-weight: bold; border-left: 4px solid #D32F2F; padding-left: 10px;">
                <%= request.getAttribute("error_clave") %>
            </div>
        <% } %>
        
        <% if (request.getAttribute("success_msg") != null) { %>
            <div style="color: #388E3C; margin-bottom: 15px; font-weight: bold; border-left: 4px solid #388E3C; padding-left: 10px; font-size: 1.1em;">
                <%= request.getAttribute("success_msg") %>
            </div>
        <% } else { %>
            <form method="post" action="SaveLinkServlet">
                <input type="hidden" name="resource_link_id" value="<%= request.getAttribute("resource_link_id") != null ? request.getAttribute("resource_link_id") : request.getParameter("resource_link_id") %>" />       
                <div class="editfields">
                    <div title="Nombre o clave secreta de la herramienta en el TPM">Clave de la Herramienta (Toolname):</div>
                    <div>
                        <input type="text" name="toolname" required="required" placeholder="Ej: EjercicioJava01" style="width: 90%;"/>
                    </div>
                </div>
                <div class="centrado" style="margin-top: 20px;">
                    <input class="accionp" type="submit" value="Vincular y Lanzar" />
                </div>
            </form>
        <% } %>
    </div>
</body>
</html>