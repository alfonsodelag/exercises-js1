let arrayValores = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
];

function validarValor(cadena) {
    if (typeof (cadena) == "string") {
        return cadena;
    }
}

function cambiarCadena(cadena) {
    console.log(cadena.toUpperCase() + "!")
}

arrayValores.filter(validarValor).forEach(cambiarCadena)
