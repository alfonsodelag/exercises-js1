let classA = ["Josu", "Jaime", "Alfonso"];
let classB = ["Pedro", "Claudia"];

let allClassSorted = classA.concat(classB).sort();

function isInClass(name) {
    if (allClassSorted.includes(name)) {
        console.log(`${name} is in the class`)
    } else {
        console.log(`${name} is NOT in the class`)
    }
}

isInClass("alfonso");
