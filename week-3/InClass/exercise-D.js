var cake = "hello";

let startsWith = cake.startsWith("h");

console.log(startsWith);

// function startsWith() {
//     if (cake.startsWith("h")) {
//         return true
//     } else {
//         return false;
//     }
// }

// console.log(startsWith());



// function greeting(name) {
//     return `Hola ${name}, como estas?`
// }

// console.log(greeting("Alfonso"));


// function myMap(array, callback) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         // console.log("array[i]: ", array[i]);
//         // console.log("callback de array[i]", callback(array[i]));
//         result.push(callback(array[i]));
//     }

//     return result;
// }

// console.log(myMap(["Alfonso", "Sebastian", "Juan"], greeting));

// let array = [5, 7, 9];
// function double(n) {
//     return n * 2
// };

// console.log(myMap(array, double));
// console.log(array.map(double));

// .map() es una higher order function. Las HOF reciben o devuelven funciones



// function abracaFunction(toUpperCase) {
//     console.log("I am abracaFunction! Watch as I mutate an array of strings to your heart's content!");
//     const abracaArray = [
//         "James",
//         "Elamin",
//         "Ismael",
//         "Sanyia",
//         "Chris",
//         "Antigoni",
//         "Zelda",
//         "Aala"
//     ];

//     const abracaOutput = toUpperCase(abracaArray);
//     return abracaOutput;
// }

// console.log(abracaFunction(toUpperCase => toUpperCase.map((el) => el.toUpperCase()).sort()));





// function arrayNumero(numero) {
//     console.log('El numero es: ' + numero);
// }

// let num = [5, 8, 5];

