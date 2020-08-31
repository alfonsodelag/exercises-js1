const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];

function safeLevels(array) {
    for (let i = 0; i < array.length; i++) {
        const arrayIteration = array[i];
        if (arrayIteration.includes("23.1%")) {
            return arrayIteration;
        }

    }
}

console.log(safeLevels(oxygenLevels1));