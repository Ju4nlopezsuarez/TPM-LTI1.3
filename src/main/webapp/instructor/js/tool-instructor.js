function sendCommand() {
	let launchId = document.getElementById("launchId").value;

	let pPassword = document.getElementById("instructorpass");
	if (pPassword)
		pPassword = pPassword.textContent;
	let pCommand = document.getElementById("command");
	if (pCommand) {
		pCommand = pCommand.value;
		if (pCommand.indexOf("\n") == -1) {
			pCommand += "\n";
		}
	}
	if (!commandFilename) {
		commandFilename = "commandFile.txt"
	}
	let blob = new Blob([pCommand], { type: 'plain/text' });
	let formData = new FormData();
	formData.append("launchId", launchId);
	if (pPassword)
		formData.append("password", pPassword);
	formData.append("upload", blob, commandFilename);

	// Mostramos cargando
	showLoading();
	send(formData);
}

window.addEventListener("load", function() {
	if (enableInstructorCommand) {
		document.getElementById("show").onclick= function() {
			this.nextElementSibling.classList.remove("hidden"); 
			this.className = "hidden"; }; 
		document.getElementById("show").style.cursor="pointer";
		document.getElementById("sendComamnd").onclick=sendCommand;
	}

	let syncButton = document.getElementById("syncroster");
	if (syncButton) {
		syncButton.onclick = function() {
			let launchId = syncButton.getAttribute("data-launch") || "";
			showLoading();
			fetch('syncroster', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: 'launchId=' + encodeURIComponent(launchId)
			})
			.then(response => response.json())
			.then(data => {
				let resultDiv = document.getElementById("result");
				if (resultDiv) resultDiv.innerHTML = "";
				
				if (data.success && data.users) {
					let html = "<h3>Alumnos Sincronizados (" + data.users.length + ")</h3>";
					html += "<table class='infotable'><thead><tr><th>Nombre</th><th>Email</th><th>Rol</th></tr></thead><tbody>";
					for (let u of data.users) {
						let rolesStr = '';
						if (u.roles && u.roles.length > 0) {
							rolesStr = u.roles.map(r => r.replace(/http:\/\/purl\.imsglobal\.org\/vocab\/lis\/v2\/membership#/g, '')).join(', ');
						}
						if(u.name!='' && u.name!=null && u.email!='' && u.email!=null) {
							html += "<tr><td>" + u.name + "</td><td>" + u.email + "</td><td>" + rolesStr + "</td></tr>";
						}
					}
					html += "</tbody></table>";
					if (typeof createResult === "function") {
						createResult(html);
					} else {
						alert('Alumnos sincronizados correctamente.');
						location.reload();
					}
				} else {
					alert('Error al sincronizar alumnos: ' + (data.error || 'Desconocido'));
				}
			})
			.catch(error => {
				let resultDiv = document.getElementById("result");
				if (resultDiv) resultDiv.innerHTML = "";
				
				console.error('Error:', error);
				alert('Error de conexión al sincronizar alumnos.');
			});
		};
	}
});
