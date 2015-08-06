var suma=0;
var numeros = process.argv[2];
//Verificando que hay argumentos que sumar
if(!numeros){
	console.log("No hay argumentos que sumar");
	//Sale del proceso invocado
	process.exit();
}
numeros= process.argv[2].split(',');
for (var i=0; i< numeros.length;i++){
	suma +=parseInt(numeros[i]);
}
console.log("Suma="+suma);