// - Desarrollar una función que reciba por parámetro una vocal e indique que número de orden (del 1 al 5) le corresponde a dicha vocal. En caso de recibir algún dato que no sea String retornar null.

function ordenVocal(vocal) {
    if (typeof vocal != "string") return "null";

    //Convertir a minúscula el parametro vocal
    let vocalMinuscula = vocal.toLowerCase();
    switch (vocalMinuscula) {
        case ("a"):
            return (1);
        case ("e"):
            return (2);
        case ("i"):
            return (3);
        case ("o"):
            return (4);
        case ("u"):
            return (5);
    }
}

console.log(ordenVocal("A")) // 1
console.log(ordenVocal("o")) // 4
console.log(ordenVocal("oasdaas")) // undefined
console.log(ordenVocal(23456)) // null



// - Desarrollar una función que reciba por parámetro dos números y calcule el valor que surja de acumular los resultados de su suma, resta, multiplicación y división. Si ese valor obtenido es un número par, retornar true, de lo contrario retornar false.

function operaciones2(num1, num2) {
    let suma = (num1 + num2);
    let resta = (num1 - num2);
    let multiplicacion = (num1 * num2);
    let division = (num1 / num2);
    let resultados = [suma, resta, multiplicacion, division];
    let resultados2 = []

    for (let resultado of resultados) {
        if (resultado % 2 === 0) {
            resultados2.push([resultado, true])
        } else {
            resultados2.push([resultado, false])
        }
    }
    return resultados2;
}

console.log(operaciones2(10, 5)) // [[15, false], [5, false], [50, true], [2, true]]
console.log(operaciones2(1, 5)) // [[6, true], [-4, true], [5, false], [0.2, false]]

// - Un turista quiere averiguar a qué país del mundo puede viajar con el dinero que cuenta. Tiene ahorrado 500.000 pesos y actualmente sale $x el dólar y $z el real. Realizar una función que indique a qué país puede viajar sabiendo que para ir a Suiza necesitarà 600 dólares o 800 reales, para ir a Estados Unidos necesitarà màs de 1000 dólares y para ir a Brasil necesitarà 2000 reales y 200 dólares.

function dolarAPeso(montoD, precioD) {
    return montoD * precioD;
}
function realAPeso(montoR, precioR) {
    return montoR * precioR;
}

function dondeViajo(precioDolar, precioReal) {
    let ahorrosPesos = 500000;
    let viajeSuiza = (ahorrosPesos - dolarAPeso(600, precioDolar)) >= 0 || (ahorrosPesos - realAPeso(800, precioReal)) >= 0;
    let viajeEEUU = (ahorrosPesos - dolarAPeso(1000, precioDolar)) > 0;
    let viajeBrasil = (ahorrosPesos - dolarAPeso(200, precioDolar) - realAPeso(2000, precioReal)) >= 0;

    return { viajeSuiza, viajeEEUU, viajeBrasil }
}

console.log(dondeViajo(200, 39)) //{viajeSuiza: true, viajeEEUU: true, viajeBrasil: true}
console.log(dondeViajo(500, 250)) //{viajeSuiza: true, viajeEEUU: false, viajeBrasil: false}

// Realizar una función que indique si una persona se encuentra apta para una competencia física. Para eso, debemos realizar una función  que reciba dos parámetros.
// 1. La edad de la persona (Number)
// 2. Si ha entregado sus estudios médicos (Booleano)
// La función deberá evaluar las siguientes condiciones y retornar en cada caso lo que se pida:
// A) Si ha entregado sus estudios y es mayor o igual de 18 años: retorna un valor booleano true.
// B) Si ha entregado sus estudios pero es menor de 18 años: retorna un string que diga “Sólo puedes competir con un adulto acompañante”.
// C) Para cualquier otro caso: retorna un valor booleano false.

function personaApta(edad, estudios) {
    if (estudios === true) {
        if (edad >= 18) {
            return true;
        } else {
            return "Sólo puedes competir con un adulto acompañante"
        }
    } else {
        return false;
    }
}

console.log(personaApta(17, true)) // Sólo puedes competir con un adulto acompañante
console.log(personaApta(15, false)) // false
console.log(personaApta(20, true)) // true
console.log(personaApta(25, false)) // false

// Dado el siguiente arreglo de objetos:

// let libros = [
//     {
//         nombre : "historiasInconscientes",
//         autor : "Gabriel Rolón",
//         paginas: 352
//     },
//     {
//         nombre : "operacionMasacre",
//         autor : "Rodolfo Walsh",
//         paginas : 236
//     },
//     {
//         nombre   : "elAlquimista",
//         autor : "Paulo Coehlo",
//         paginas: 192
//     },
//     {
//         nombre  : "elCampamento",
//         autor : "Blue Jeans",
//         paginas: 480
//     }
// ]

// Realizar una función que reciba un array como parámetro, y lo recorra para filtrar los objetos cuya cantidad de páginas sea mayor a 300. La función deberá retornar un nuevo arreglo con los libros que cumplan con la condición antes mencionada.
// Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento.

let libros = [
    {nombre : "historiasInconscientes", autor : "Gabriel Rolón", paginas: 352},
    {nombre : "operacionMasacre", autor : "Rodolfo Walsh", paginas : 236},
    {nombre   : "elAlquimista", autor : "Paulo Coehlo", paginas: 192},
    {nombre  : "elCampamento", autor : "Blue Jeans", paginas: 480}
]

let librosMasDe300Páginas = []

function filtrarLibrosPorPáginas(array){
    for(let libro of libros){
        if(libro.paginas > 300){
            librosMasDe300Páginas.push(libro)
        }
    }
    return librosMasDe300Páginas;
}

console.log(filtrarLibrosPorPáginas(libros))
//[
    //{nombre: 'historiasInconscientes', autor: 'Gabriel Rolón', paginas: 352}, 
    //{ nombre: 'elCampamento', autor: 'Blue Jeans', paginas: 480 }
//]