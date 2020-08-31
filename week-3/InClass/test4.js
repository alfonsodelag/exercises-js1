const anios = [1964, 2008, 1999, 2005, 1978, 1985, 1919];


function double(n) {
    console.log(n * 2);
    return n * 2;
}

let forEachAnios = anios.forEach(double);
console.log("forEachAnios :", forEachAnios);

let mapAnios = anios.map(double);
console.log("mapAnios : ", mapAnios)

// function validarAnio(anio) {
//     return anio > 2000;
// }

// function imprimirAnio(anio) {
//     console.log("El año es :" + anio)
// }

// console.log(anios.map(validarAnio).forEach(resultado => {
//     if(resultado === true) {
//         console.log("El numero es mayor que 2000")
//     }
// }))

// let newArray = anios.map(validarAnio).forEach(imprimirAnio);

// let newArray1 = anios.forEach(imprimirAnio).map(validarAnio); // ! NO FUNCIONARÁ. PRIMERO DEBES TRABAJAR CON EL MAP ANTES DE FOREACH

// console.log(newArray);
// console.log(newArray1);