<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="es.us.dit.lti.ToolSession" %>
<%
    // Recuperamos la sesión y comprobamos por seguridad que estamos en un flujo Deep Linking válido
    ToolSession ts = (ToolSession) session.getAttribute(ToolSession.class.getName());
    if (ts == null || !ts.isDeepLinking()) {
        response.sendRedirect("../error.jsp");
        return;
    }
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Enlazar Herramienta (Deep Linking)</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/material-icons.css">
</head>
<body>
    <div id="content">
        <h2><i class="material-icons" style="vertical-align: middle;">link</i> Configuración de la Actividad LTI 1.3</h2>
        
        <p>Estás a punto de enlazar la herramienta <strong><%= ts.getTool().getName() %></strong> en tu plataforma LMS.</p>
        
        <form action="../DeepLinkServlet" method="POST" style="margin-top: 20px;">
            <p>
                <label for="title"><strong>Título del enlace en el curso:</strong></label><br>
                <input type="text" id="title" name="title" value="<%= ts.getTool().getName() %>" style="width: 300px;">
            </p>
            
            <p>
                <label for="custom_args"><strong>Argumentos adicionales (Opcional):</strong></label><br>
                <input type="text" id="custom_args" name="custom_args" value="" placeholder="Ej. -flag" style="width: 300px;">
            </p>

            <button type="submit" style="padding: 10px 20px; cursor: pointer;">
                <i class="material-icons" style="vertical-align: middle; font-size: 16px;">check_circle</i> Confirmar y Crear Enlace
            </button>
        </form>
    </div>
</body>
</html>