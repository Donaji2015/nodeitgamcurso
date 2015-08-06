//Bloking Model
//------

//Importando una libreria de Node
var fs = require('fs');//flujos de archivos
//Leer el archivo de forma sincrona
var content = 
fs.readFileSync('\documento.txt','utf8');
//Imprimir en consola el contenido del archivo leido
console.log(content);
//Ejecutando otra instruccion
console.log('Ejecutando una tarea');
