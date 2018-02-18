//CLASE 9

//EJERCICIO REPASO CLASE 8;

var texto = "Hola, buenos días, soy Carlos";
var letra = prompt("introduce una letra");
var veces = 0;

for (var i = 0; i < texto.length; i++) {
	var letraActual = texto.charAt(i);
	if (letraActual == letra) {
		veces++;

	}
}
console.log(veces);


//-----------------------------------

function apariciones (texto, letra) {
var veces = 0;

	for (var i = 0; i < texto.length; i++;) {
		if(texto[i]){
		veces++
	}
}

apariciones("En un lugar de la mancha", "a");
console.log(veces);


//Ejercicios Arrays

//Ejercicio 1
//Junta estos tres Arrays ["Oscar", ...], [9897667, ...], [false, ...] de tal forma que construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]

/* Solución cutre y mal 
var array = ["Oscar", "David", "Maria"];
var array2 = [111, 222, 333];
var array3 = [false, true, false];

var union1 = array[0].concat(array2[0],array3[0]);
var union2 = array[1].concat(array2[1],array3[1]);
var union3 = Array[array[2].concat(array2[2],array3[2]);

console.log(union1);
console.log(union2);
console.log(union3);
*/

var array = ["Oscar", "David", "Maria"];
var array2 = [111, 222, 333];
var array3 = [false, true, false];
var todos = [];

for (var i = 0; i < array.length; i++) {
	var nuevoArray = [array[i], array2[i], array3[i]];
	todos.push(nuevoArray);
}

console.log(todos);


//Ejercicio 2
//Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares

var unionPar = [];
var unionImpar = [];

for (var i = 0; i <= 100; i++) {
	var numero = Math.floor(Math.random() * (i - 0) + 0);
	if (numero % 2 == 0) {
		unionPar.push(numero);
	} if (numero % 2 != 0) {
		unionImpar.push(numero);
	}	
} 

console.log(unionPar);
console.log(unionImpar);


//Ejercicio 3
//Vamos a gestionar la lista de asistentes de un evento
	//Cada asistente recibirá el identificador de su posición en el Array.
	//El identificador no puede cambiar una vez reservado el asiento.
	//Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
	//Los nuevos asistentes seran asigandos primero a asientos desocupados.

//Verifica antes de asignar un asistente que no se registro previamente.

/*
var lista = [];

	for (var i = 0; i <= 100; i++) {
	var identificador = i; 
	lista.push(identificador);
	} 

console.log(lista)*/


var lista = [];

function añadirLista () {
	var nombre = prompt("Dame tu nombre");
	var nulo = lista.indexOf(null);
	if (nulo == -1) {
		lista.push(nombre);


	} else {
		lista[nulo] = nombre;
	}
	
	console.log(lista); 
}




function bajaLista () {
	var nombre = prompt("Nombre Baja");
	for (var i = 0; i < lista.length; i++) {
		var persona = lista[i];
		if (nombre === persona) {
			lista[i] = null;

		}
	}

}

añadirLista();
bajaLista ();













