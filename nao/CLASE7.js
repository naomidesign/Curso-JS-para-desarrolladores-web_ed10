//EJERCICIOS CLASE 7

//MATHS-------------------------

//EJERCICIO 1
//Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz. 

function lanzarMoneda () {
	var moneda = Math.floor(Math.random() * (2 - 0) + 0);

	if (moneda === 1){
		console.log("cara");

	} else {
		console.log("cruz");
	}
}

lanzarMoneda ()


//EJERCICIO2
//Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

function lanzarDados () {
	var dado1 = Number(Math.floor(Math.random() * (7 - 1) + 1));
	var dado2 = Number(Math.floor(Math.random() * (7 - 1) + 1));

	var resultado = Number(dado1) + Number(dado2);
	return resultado
	
}

var veces = 0

for (var i = 0; i < 100; i++) {
	var resultado = lanzarDados(); 

	if (resultado === 10) {
		veces++;

	} 
};

console.log(veces);


//DATES------------------------

//EJERCICIO 1
//Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

/*
El usuario introduce tres números (día, mes, año) usando una función.
Validar la fecha. En caso de error incluir un mensaje informativo.
Después de validar, devolvemos la fecha en formato DD/MM/AAAA
Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
*/

var dia = prompt("Introduce un día");
var mes = prompt("Introduce un mes"); 
var anyo = prompt("introduce un año");

if (dia <= 31 && dia > 0 && mes <= 11) {
	var nuevaFecha = new Date(Date.UTC(anyo, mes, dia));
	console.info(nuevaFecha);

} else {
	console.log("introduce otra fecha");
} 















