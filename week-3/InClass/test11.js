function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayIteration = array[i];
        let minValueOfSpreadArr = Math.min(...array);
        let maxValueOfSpreadArr = Math.max(...array);
        console.log("minValueOfSpreadArr", minValueOfSpreadArr);
        console.log("maxValueOfSpreadArr", maxValueOfSpreadArr);
        if (arrayIteration !== minValueOfSpreadArr && arrayIteration !== maxValueOfSpreadArr) {
            sum += arrayIteration;
        }
    }
    return sum;
}

console.log(sumArray([6, 2, 1, 8, 10]))

let array = [1, 2, 3];
let spreadArray = (array)