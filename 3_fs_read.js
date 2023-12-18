const fs = require('node:fs');
console.log("Leyendo el primer archivo...");
const text = fs.readFileSync('./texto.txt', 'utf-8');
console.log(text);
console.log("Leyendo el segundo  archivo...");
const text2 = fs.readFileSync('./texto2.txt', 'utf-8');
console.log(text2);

// Estos archivos se han leido de manera sincrona. Esto significa que si quisieramos hacer algo de mientras que 
// se leen los archivos, debemos esperar a que se hayan leido.

// Vamos a hacer de manera asincrona.