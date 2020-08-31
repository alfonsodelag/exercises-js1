const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919, 2011, 2018];

// function canDrive(year) {
//     if (2020 - year >= 17) {
//         return year;
//     }
// }

const ageToDrive = birthYears.filter((year) => 2020 - year >= 17);
const ageToDrive1 = birthYears.map((year) => 2020 - year >= 17);

ageToDrive1.forEach((years) => {
    if (years) {
        console.log("SI PUEDE MANEJAR")
    } else {
        console.log("No puede manejar")
    }
})

console.log("These are birth Years of people who can drive", ageToDrive);
console.log("These are birth Years of people who can drive", ageToDrive1);