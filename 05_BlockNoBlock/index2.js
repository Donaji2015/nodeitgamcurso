//Non Bloking Model
//------

//Importando una libreria de Node
var fs = require('fs');
//Manejador
var manejador = function(err, data){
	if(!err){
		console.log(data);
	}
	else{
		console.log('Error el abrir archivo');
		return;
	}
};
//Leer el archivo de forma asincrona
fs.readFile('\documento.txt','utf8',manejador);
//Otra operacion
console.log('\n');
console.log('Haciendo otra operacion');



// var content = 
// fs.readFileSync('\documento.txt','utf8');
// //Imprimir en consola el contenido del archivo leido
// console.log(content);
// //Ejecutando otra instruccion
// console.log('Ejecutando una tarea');