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



