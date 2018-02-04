
//Rehacer ejercicios clase 3



//EJERCICIO 1 -------------------------------------------------------
/*
Proceso esBisiesto
		
		Escribir "Dime el Año:"
		Leer year
		
		Si year % 4 = 0 & year % 100 <> 0 Entonces
			Escribir "Amigo, el año " year " es bisiesto!"
		Sino
			Si year % 400 = 0 & year % 100 = 0 Entonces
				Escribir "Amigo, el año " year " es bisiesto!"
			Sino
				Escribir "Amigo, el año " year " NO es bisiesto!"
			Fin Si
		Fin Si
		
	FinProceso*/


	
function anyoBisiesto () {
var year = prompt("Escribe aquí tu año");

	if (year % 4 === 0 && year % 100 !== 0) {
		console.log("Es un año bisiesto");
		} else { 
				if (year % 400 === 0 && year % 100 === 0) {
					console.log("es un año bisiesto");
			
				} else {
					console.log("No es un año bisiesto");
				}

		}
}

anyoBisiesto ();


//EJERCICIO 2 -----------------------------------------------------------

/*
Proceso contadorPositivo
		
		controlador = 1
		
		Escribir "Empieza la cuenta!"
		
		Mientras controlador <= 100 Hacer
			Escribir controlador
			controlador = controlador +1
		Fin Mientras
		
		Escribir "Terminó la cuenta mágica..."
		
	FinProceso
*/

function positiveCounter () {
	var i = 0;

	console.log("Empieza la cuenta")

	for (i = 0; i <= 100; i++) {
		console.log(i)
	}
	console.log("Terminó la cuenta mágica")
}

positiveCounter();


// EJERCICIO 3 ----------------------------------------------------------


function positiveCounter () {
	var i = 100;

	console.log("Empieza la cuenta")

	for (i = 100; i <= 100; i--) {
		console.log(i)
	}
	console.log("Terminó la cuenta mágica")
}

positiveCounter();





















// rehacer ejercicios clase 2

//ejercicio 1

/*
1 - Diseña un programa que lea dos números y realice los siguientes cálculos:

Valor de su suma
Valor de su resta
Valor de su division
Valor de su producto
*/

var num = Number(prompt("Introduce un número"));
var num2 = Number(prompt("Introduce otro número"));


function resultadoSuma () {
	resultadoSuma = num + num2;
	if (isNaN(resultadoSuma)) {
		console.log("error, eso no es un número");
	} else {
		return resultadoSuma
	}
}

resultadoSuma();


function resultadoResta () {
	resultadoResta = num - num2;
	if (isNaN(resultadoResta)) {
		console.log("error, eso no es un número");
	} else {
		return resultadoResta
	}
}


resultadoResta();


console.log(resultadoSuma); console.log(resultadoResta); 