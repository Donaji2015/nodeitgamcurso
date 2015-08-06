//Cerraduras
// function saludar(){
// 	var mensaje="Hola a los Grisese . . .";
// 	console.log(mensaje);
// }
// console.log(mensaje);
function retornaFuncionSaludo() {
	var mensaje="Hola a los Grisese . . .";
	return function(){
		console.log(mensaje);
	}
}

//ejecuto retorna funcionsaludo
var saludar=retornaFuncionSaludo();
//ejecuto funcion saludar
saludar();
