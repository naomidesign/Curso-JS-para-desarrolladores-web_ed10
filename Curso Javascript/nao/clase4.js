// EJERCICIOS CLASE 4 ///////////


// ejercicio 1
 var nombre = false;
 console.assert(nombre, "mi nombre no es naomi");


 //Ejercicio 2
 console.warn("hola hola");
 console.time("presentación");


console.group ("verConsoles");
console.time("holas")
	console.log("hola");
	console.info("holahola");
	console.warn("holamal");
console.timeEnd("holas");
console.groupEnd();



//Ejercicio 3 
//Mejorar estilos con css

console.group ("verConsoles");
console.time("verConsoles")
	console.log('%c hola ', 'font-size: 40px; color: #c45789; background-color: black;');
	console.info("%c holahola", "font-size: 50px; border-bottom: solid 3px red;");
	console.warn("%c holamal", "font-size: 35px; background-color: yellow; color: black;");
console.timeEnd("verConsoles")
console.groupEnd();


//DEBERES CLASE 4

//Ejercicio 1

/*
1 - Vamos a solicitar la colaboración del usuario para lograr nuestros objetivos:

Objetivos:

Captura el nombre del usuario usando prompt
Pregunta al usuario si desea "comprobar lo rápido que funciona su navegador".
En caso afirmativo imprimiremos el nombre del usuario por consola aplicandole estilos y calculando el tiempo que tarda en realizar la operación
En caso negativo mostraremos un alert informativo. 
*/

var userName = prompt("nombre de usuario");
var respuestaUser = confirm("Hola "+userName+". ¿Quieres comprobar tu navegador?");

if (respuestaUser == true) {
	console.group("respuestaUser");
	console.time("respuestaUser");
		console.log("%c Genial!! "+userName+"", "background-color: green; font-size: 24px; color: white;");
	console.timeEnd("respuestaUser");
	console.groupEnd();
} else {
	console.log("%c Oh "+userName+", ¿no deseas saberlo :(?", "background-color: red; font-size: 24px; color: white;");
}







