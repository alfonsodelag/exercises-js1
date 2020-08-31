function arrayNumero(numero) {
    console.log('El numero es: ' + numero);
}

let num = [5, 8, 5];

num.forEach(arrayNumero);

let nombres = ["Pedro", "Anni", "Rosario", "Julian"];

function longNombre(nombre) {
    console.log(nombre + " tiene esta longitud: " + nombre.length)
}

nombres.forEach(longNombre);


// function nuevoNombre(seteoNombre) {
//     let nombre = ["Ani", "Pedro", "Juan"];
//     return seteoNombre(nombre);
// }


// console.log(nuevoNombre(array => array.map((nuevaCadena) => nuevaCadena + "!")));

// function concatenarArray(string) {
//     return nuevaCadena = nuevaCadena + "!";
// }

// function abracaFunction(toUpperCase) {
//     console.log(
//         "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
//     );
//     const abracaArray = [
//         "James",
//         "Elamin",
//         "Ismael",
//         "Sanyia",
//         "Chris",
//         "Antigoni",
//     ];

//     const abracaOutput = toUpperCase(abracaArray);

//     return abracaOutput;
// }

// console.log(abracaFunction(toUpperCase => toUpperCase.map((el) => el.toUpperCase())));


// let num = [1, 3, 4];

// function suma(sum) {
//     return sum + 2;

// }

// let num01 = num.map((sum) => sum + 2);

// console.log(num01)

// // let nombres = ["Pedro", "Juan", "Maria"];

// // function formatToString(newString) {
// //     return newString.toUpperCase();
// // }

// // for (let i = 0; i <= 2; i++) {
// //     nombre[i] = formatToString(nombre[i]);
// // }

// // console.log(nombre);



// // Exercise A (5 minutes)
// // Create an array with the names of the people on your table
// // console.log out the names and how many people are at the table
// // Put someone from another table at the beginning of the array
// // Add someone else to the end of the list
// // let claseA = ["Josu", "Jaime", "Alfonso"];
// // let claseB = ["Peter", "Joseph", "Zelda"];
// // let finalArrayAlphabetical = claseA.concat(claseB).sort()

// // console.log(finalArrayAlphabetical)

// // function findName(name) {
// //     if (finalArrayAlphabetical.includes(name)) {
// //         console.log(name + " is in the class with " + finalArrayAlphabetical);
// //     } else {
// //         console.log(name + " is not in the class with " + finalArrayAlphabetical);
// //     }
// // }

// // findName("Alfonso");
// // findName("Angelo");

