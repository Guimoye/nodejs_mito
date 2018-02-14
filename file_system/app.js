const fs = require('fs');

console.log('Iniciado');

/*
fs.readFile('data.txt','utf-8',(error,data)=>{
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(data);
    }
});
*/
//leer txt
//let data = fs.readFileSync('data.txt','utf-8');
//console.log(data);

/*
//renombrar txt
fs.rename('data.txt','data_renombrado.txt',(error)=>{
    if(error) throw error
    console.log('¡Renombrado!');
});


//agregar datos a un txt
fs.appendFile('data.txt','\n Gracias por suscribirte ',(error)=>{
    if(error) console.log(`Error ${error}`);
});

//eliminar txt
fs.unlink('data2.txt',(error)=>{
if(error) throw error;
console.log('Eliminado')
});
*/

//copiar datos de un txt y creando uno nuevo
//fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));
/*
fs.readdir('./',(error,files)=>{
    files.forEach(file =>{
           console.log(file);
    });
});
*/

fs.readdirSync('./').forEach(variable => {
    console.log(variable);
});

console.log('Finalizado');