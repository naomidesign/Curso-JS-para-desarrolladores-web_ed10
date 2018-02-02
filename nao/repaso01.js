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