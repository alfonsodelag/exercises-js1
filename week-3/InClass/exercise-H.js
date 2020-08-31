let nombres = ["Hugo", "Alfonso", "Paco", "Luis"];

function findAlfonso(nombre) {
    if (nombre === "Alfonso") {
        return "Found me!"
    } else {
        return "Haven't found me :("
    }
}

let miNombre = "Alfonso"

let result = nombres.find(nombre => nombre === miNombre);
if (result === miNombre) {
    console.log("Me encontraste!")
} else {
    console.log("No me encontraste :(")
}
console.log("result: ", result)

// console.log(nombres.find(findAlfonso));





// console.log(nombres.find(nombre => {
//     if (nombre.includes("Alfonso")) {
//         return console.log("Found me!")
//     } else {
//         return console.log("Haven't found me :(")
//     }
// }
// ))