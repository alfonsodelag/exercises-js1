function abracaFunction(toUpperCase) {
    console.log("I am abracaFunction! Watch as I mutate an array of strings to your heart's content!");
    const abracaArray = [
        "James",
        "Elamin",
        "Ismael",
        "Sanyia",
        "Chris",
        "Antigoni",
    ];

    const abracaOutput = toUpperCase(abracaArray);
    return abracaOutput;
}

console.log(abracaFunction(toUpperCase => toUpperCase.map((el) => el.toUpperCase())));



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