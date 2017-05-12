
function mostrarData(){
	var impresion = document.getElementById("clientes");

	var name = document.getElementById("name").value;
	var lastName = document.getElementById("apellido").value;
	var email = document.getElementById("email").value;
	var direc = document.getElementById("dir").value;
	var cell = document.getElementById("fono").value;


	/*var arr = [[name,"nombre"],[lastName,"apellido"],[email,"correo"],[direc,"dirección"],[cell,"telefono"];
	for (i=0 ; i<arr.length ; i++){
		for (j=0 ; j<arr.length ; j++){
			if (arr[i][0] == ""){
				campoNoVacio(arr[i][1]);
			}
		}
		
	}*/
	
	impresion.innerHTML = "<br><ul><li>" + name + " " + lastName + "</li><br><li>" + email + "</li><br><li>" + direc + "</li><br><li>"  + cell + "</li></ul><br>";
}

function campoNoVacio(mensaje){
	while (mensaje==""){
		alert("Por favor, ingrese " + mensaje);
	}
}