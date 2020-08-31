function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum += element * element;
    }
    return sum;
}

console.log(squareSum([1, 2, 2])); // ((i*i) + (i*i))
console.log(squareSum([0, 3, 4, 5]));  // 0+3+4+5 = 12