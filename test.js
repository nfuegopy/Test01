//llamamos la funcion verificacionSImbolos, ordenando de mejor manera la estructura
//del codigo para mantenerlo mas legible en este archivo test.js se realizaran las pruebas
//con una carga de ejemplos en los que se balancea los simbolos como en los que no se balancean
const { verificacionSimbolos } = require('./functions');

//Funcion donde estaremos la ejecucion de las pruebas
function ejecutarPruebas() {
    ejecutarPrueba1();
    ejecutarPrueba2();
}
//Ejemplo utilizando simbolos con los cierres correspondientes
function ejecutarPrueba1() {
    const resultado = verificacionSimbolos("[()]{}{()()}");
    if (resultado === true) {
        console.log('Prueba 1 Pasó: [()]{}{()()} es balanceada');
    } else {
        console.error('Prueba 1 Fallida: [()]{}{()()} no es balanceada');
    }
}
//Ejemplo para casos en los que no cumpla los simbolos de apertura y cierra no coincidan
function ejecutarPrueba2() {
    const resultado = verificacionSimbolos("[(])");
    if (resultado === false) {
        console.log('Prueba 2 Pasó: [(]) no es balanceada');
    } else {
        console.error('Prueba 2 Fallida: [(]) es balanceada');
    }
}

ejecutarPruebas();
