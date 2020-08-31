// function summation(input) {
//     let sum = 0;
//     while (sum <= input) {
//         sum += input;
//     }
//     return sum;
// }

var summation = function (num) {
    let sum = 0;
    let zero = 0
    while (zero < num) {
        zero++;
        sum += zero;
    }
    return sum;
}
console.log(summation(8));