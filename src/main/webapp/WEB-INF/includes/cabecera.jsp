<div class="h1container">
	<h1>
		<a href="${pageContext.servletContext.contextPath}/logout"><span class="bcerrar material-icons">close</span></a>
		Administrador de herramientas de correccion LTI ${appVersion }
		---
		${mgmtUser.username}
	</h1>
</div>
<div id="aboutdiv">
	<p id="about">
		<strong>&copy; 2025</strong>
		<img src="../img/dit.gif" alt="Departamento de Ingenieria Telematica" width="35" height="35">
		Departamento de Ingenieria Telematica
		<img src="../img/uslogo.png" alt="Universidad de Sevilla" width="40" height="35">
		Universidad de Sevilla
	<p>
</div>
<div id="menu">
	<% es.us.dit.lti.entity.MgmtUserType
		tipoUsuario=((es.us.dit.lti.entity.MgmtUser)session.getAttribute("mgmtUser")).getType();
		if(tipoUsuario==es.us.dit.lti.entity.MgmtUserType.SUPER) { %>
		<a href='../super/users.jsp'> Usuarios </a>
		<a href='../super/settings.jsp'> Ajustes </a>
		<a href='../super/maintenance.jsp'> Mantenimiento </a>
		<% } /* Menú ADMIN */ if (tipoUsuario==es.us.dit.lti.entity.MgmtUserType.ADMIN ||
			tipoUsuario==es.us.dit.lti.entity.MgmtUserType.SUPER) { %>
			<a href='../admin/platforms'> Plataformas LTI 1.3 </a>
			<% } /* Todos */ %>
				<a href='../user/tools.jsp'> Herramientas </a>
				<a href='../user/editdata.jsp'> Datos personales </a>

</div>
<% /* Is there a notice? */ String notice=es.us.dit.lti.entity.Settings.getNotice(); if (notice !=null &&
	!notice.isEmpty()) { %>
	<div id="notice">
		<%=notice %>
	</div>
	<% } %>