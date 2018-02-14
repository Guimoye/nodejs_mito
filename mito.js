
let suscriptores = 22000;

//exportar variable suscriptores
    //module.exports.suscriptores = 15000;
    /*
    module.exports.saludar = function(){
        console.log('suscribete al canal de guimoye');
    }

    module.exports.subs = suscriptores;
    */

    //en vez de colocar function se coloca =>
module.exports={
    subs: suscriptores,
    saludar:()=>{
        console.log('hola coder');
    },
    sumar:(a,b) =>{
         return a+b;
    },
    mostrar: (c) => c+13
}