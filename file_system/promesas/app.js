
let prom = require('./promesa');

prom.calcular(3,3).then((resultado) => {
    console.log(resultado);
},(error)=>{
    console.log(error);
});



/*
//el 1ro resultado positivo, 2do resultado negativo
let promesa = new Promise((res,rej)=>{
    //res('exito al procesar los datos');
    rej('Error al procesar');
});


promesa.then((resultado)=>{
    console.log(resultado);
}, (error)=>{
    console.log(error);
});
*/