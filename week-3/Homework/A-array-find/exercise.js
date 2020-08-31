/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/
// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

function isLongName(name) {
  return name.length > 7; // return the name which has more than 7 letters
}

var longName = names.find(isLongName);

console.log(longName);

// var longNameThatStartsWithA = findLongNameThatStartsWithA(names);
// console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"



// function findLongNameThatStartsWithA() {
//   for (let i = 0; i < names.length; i++) {
//     if (names[i].length > 7 && names[i].startsWith("A")) {
//       console.log(names[i])
//     }
//   }
// }
