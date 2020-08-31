// Exercise E (10 minutes)
// Create a function that takes a birthYear, and returns the age of someone
// You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978, 1985, 1919]. Take this array and create another array containing their ages.
// console.log the birth years array

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const actualYear = new Date().getFullYear();

function getAge(birthYear) {
    return actualYear - birthYear;
}

let age = birthYears.map(getAge);

age.forEach(el => console.log(el));







// const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
// let date = new Date().getFullYear();

// function birthYear(year) {
//     return date - year;
// }

// let edad = birthYears.map(birthYear);
// console.log(edad);
// // console.log(years);