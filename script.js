var nombre = document.getElementById("name").value;
var mail = document.getElementById("email").value;
var servicio = document.getElementsByClassName("servicio").value;
var consulta = document.getElementById("consulta").value;

var tarifaDis = "$5000";
var tarifaWeb = "$10000";
var tarifaCom = "$7000";
var tarifaMkt = "$9000";

if (servicio == "Diseño Grafico"){
	alert("El precio base es de: " + tarifaDis);
}
if (servicio == "Desarrollo Web"){
	alert("El precio base es de: " + tarifaWeb);
}
if (servicio == "Comunicación y Redes"){
	alert("El precio base es de: " + tarifaCom);
}
if (servicio == "Marketing Digital"){
	alert("El precio base es de: " + tarifaMkt);
}

var cotiServicio = new CotiVolt(nombre, mail, servicio, consulta);

	function CotiVolt(nombre, mail, servicio, consulta){
	this.nombre = nombre;
	this.mail = mail;
	this.servicio = servicio;
	this.consulta = consulta;
	
	this.getCotiVolt = function(){return this.nombre + this.mail + this.servicio + this.consulta;};
}

console.log(cotiServicio.getCotiVolt());
	
document.getElementById("enviar").onclick = enviarCoti;

function enviarCoti (){
	alert("Su consulta fue recibida");
}

document.getElementById("enviar").onkeypress = presionarEnter

function presionarEnter(e){
	if (Event.which ==13 || Event.keyCode == 13){
		function enviarCoti() {
			
		}
	}
}



