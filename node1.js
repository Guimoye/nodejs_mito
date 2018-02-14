const os = require('os');
const fs = require('fs');
const mi = require('./mito.js');

let cpu     = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

//console.log(mi.suscriptores);

setTimeout(()=>{
    console.log("Termine");
},2000);

/*
let resp = mi.sumar(10,5);
let resp1 = mi.mostrar(3);
console.log(resp);
console.log(resp1);
*/
/*
//console.log(cpu);
console.log(sistema);
console.log(usuario);

// para imprimir json 
let cpu_string = JSON.stringify(cpu);

//modelo de string
fs.appendFile('javier.txt',`informacion del cpu: ${cpu_string} `,function(error){
    if(error) console.log('error al crear archivo');
});
*/