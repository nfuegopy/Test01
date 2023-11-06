// En este archivo se define la lógica principal para la verificación de símbolos balanceados.
// Se definen tres funciones auxiliares: Apertura, Cierre y MismoSimbolo para ayudar en la verificación.
// La función principal verificacionSimbolos toma una cadena como argumento y retorna un booleano
// indicando si los símbolos de agrupación en la cadena están balanceados.
// Función principal para verificar símbolos balanceados en una cadena
function verificacionSimbolos(cadena) {
    const GrupoSimbolos = [];  
    for (const simboloActual of cadena) { 
        if (Apertura(simboloActual)) {  // Verificamos si el símbolo actual es un símbolo de apertura
            GrupoSimbolos.push(simboloActual);  // Si es así, lo añadimos a la pila
        } else if (Cierre(simboloActual)) {  // Verificamos si el símbolo actual es un símbolo de cierre
            const UltimaApertura = GrupoSimbolos.pop();  // Si es así, sacamos el último símbolo de apertura de la pila
            if (!MismoSimbolo(UltimaApertura, simboloActual)) { 
                return false;  
            }
        }
    }
    return GrupoSimbolos.length === 0;  // Verificamos si todos los símbolos de apertura han sido cerrados
}


// Función auxiliar para verificar si un símbolo es un símbolo de apertura
function Apertura(simbolo) {
    return simbolo === '(' || simbolo === '[' || simbolo === '{'; 
}

// Función auxiliar para verificar si un símbolo es un símbolo de cierre
function Cierre(simbolo) {
    return simbolo === ')' || simbolo === ']' || simbolo === '}';  
}

    // Comparamos el par de símbolos con los pares correspondientes conocidos
function MismoSimbolo(simboloDeApertura, simboloDeCierre) {

    return (simboloDeApertura === '(' && simboloDeCierre === ')') ||
           (simboloDeApertura === '[' && simboloDeCierre === ']') ||
           (simboloDeApertura === '{' && simboloDeCierre === '}');
}

// Exportamos las funciones para que puedan ser utilizadas en otros archivos, para este caso en el archivo de test.js
module.exports = {
    verificacionSimbolos,
    Apertura,
    Cierre,
    MismoSimbolo
};
