var names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function isLongName(name) {
    return name.length > 6;
}

var longName = names.find(isLongName);

console.log(longName); 