function enviar(destino) {
	let r = document.getElementsByName("id");
	let checked = false;
	let selectedId = null;
	for (let i=0, length=r.length; i< length; i++) {
		if(r[i].checked) {
			checked = true;
			selectedId = r[i].value;
			break;
		}
	}
	if (checked) {
		let f = document.getElementById("formulario");
		
		if (destino.toLowerCase().includes('delete')) {
			f.method = 'POST';
		} else {
			f.method = 'GET';
		}
		
		if (destino === 'DeletePlatformServlet' || destino === 'deleteplatform.jsp') {
			let nameInput = document.getElementById('name_' + selectedId);
			if (nameInput) {
				nameInput.disabled = false;
				nameInput.name = 'name';
			}
		}
		f.action=destino;
		f.submit();
	} else {
		alert("Seleccione un elemento.");
	}
	return true;
}

window.addEventListener("load", function () {
	if (document.getElementById("bedit"))
		document.getElementById("bedit").onclick=function() {enviar('editplatform');};
        
	if (document.getElementById("bdelete")) {
        let btn = document.getElementById("bdelete");
		btn.onclick=function() {
            let msg = btn.dataset.confirm;
            let action = btn.dataset.action || 'deleteplatform.jsp';
            if (msg) {
                if (confirm(msg)) enviar(action);
            } else {
                enviar(action);
            }
        };
    }
    
	if (document.getElementById("bclients"))
		document.getElementById("bclients").onclick=function() { enviar('clients'); };
	if (document.getElementById("bdeployments"))
		document.getElementById("bdeployments").onclick=function() { enviar('deployments'); };

	let r = document.getElementsByName("id");
	for (let ri of r) {
		ri.onchange = function() {
			if (document.getElementById("bedit")) document.getElementById("bedit").disabled = false;
			if (document.getElementById("bdelete")) document.getElementById("bdelete").disabled = false;
		};
		if(ri.checked) {
			ri.dispatchEvent(new Event('change'));
		}
	}
    
	let names = document.querySelectorAll(".platformname, .clientname, .deploymentname");
	for (let n of names) {
		n.onclick= function() {
			let radio = this.parentElement.querySelector('input[type="radio"]');
			if (radio) {
				radio.checked=true;
				radio.dispatchEvent(new Event('change'));
			}
		};
	}
});
