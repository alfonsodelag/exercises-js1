var estudiantes = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];

var grupoA = ["Austine", "Dany", "Daniel", "Swathi"];

console.log(grupoA.find(nombre => !estudiantes.includes(nombre))); // ! Returns Daniel because he is NOT in the list of students