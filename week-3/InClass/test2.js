const anios = [1964, 2008, 1999, 2005, 1978, 1985, 1919, 2045, 3256];

// ! Devuelve todas las condiciones que cumplen
// console.log(anios.filter((anio) => anio > 2000));

// ! En este caso .map() está determinando si la condición se cumple
// console.log(anios.map((anio) => anio > 2000));

// ! .find() encuentra el primer elemento que cumpla con la condición
// console.log(anios.find((anio) => anio > 2000));

let nombres = ["Ani", "Pedro", "Juan", "Tito"]

console.log(nombres.find(nom => nom == "Pedro"))   // Pedro
console.log(nombres.filter(nom => nom == "Pedro")) // ['Pedro']

console.log(nombres.find(nom => nom.length == 4 && nom.charAt(0).toUpperCase == nom.charAt(0)))