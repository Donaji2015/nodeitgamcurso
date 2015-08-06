//Expresiones de funciones
//Crear un Handler(manejador)
var funcionSaludar= function(nombre){
	console.log("Hola"+nombre);
};
//Crear un Handler
var funcionDespedirse= function(nombre){
	console.log("Adios"+nombre);
};
///Declaracion de funcion
function mensaje(nombre, handler){
	handler(nombre);
}
//Mando a ejecutar mensaje
mensaje(" Ivan",funcionSaludar);
mensaje(" Ivan",funcionDespedirse);