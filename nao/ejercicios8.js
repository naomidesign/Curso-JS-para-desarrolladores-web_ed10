//EJERCICIOS CLASE 8


//Ejercicio 1
//¿Que fecha será dentro de 30 días?

var hoy = new Date ();
var otroDia = hoy.getDate() + 30;

hoy.setDate(otroDia);
console.info(hoy)


//Ejercicio 2
//¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?
//el curso empezó el 24 de enero

var hoy = new Date();
var inicioCurso = new Date(2018, 0, 24);

console.log(hoy - inicioCurso)
var resultado = (hoy - inicioCurso);

console.log(resultado / 1000 / 60 / 60 / 24);

//Ejercicio 3
// ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días? 
//terminamos 26 febrero

var hoy = new Date ();
var finalCurso = new Date (2018, 01, 26);

console.log(finalCurso - hoy);
var resultado = (finalCurso - hoy);

var milisengundos = Math.floor(resultado);
var horas = Math.floor(resultado / 1000 / 60 / 60);
var dias = Math.floor(resultado / 1000 / 60 / 60 / 24);

console.log("han pasado " +resultado+ " milisengundos")
console.log("han pasado " +dias+ " dias");
console.log("han pasado " +horas+ " horas");

//Ejercicio 4 
//¿Que fecha será dentro de un año y 10 horas más?

var hoy = new Date ();
var diaFuturo = hoy.getFullYear() + 1;

hoy.setFullYear(diaFuturo);
console.info(hoy);

hoy.setHours(hoy.getHours()+ 10);
console.info(hoy);


