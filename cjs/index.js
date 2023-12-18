console.log('Hola mundo!');
// globalThis es una variable global que se puede acceder desde cualquier parte del código, todo sale de globalThis.

// aquí importamos la función suma que está en el archivo suma.js
// Esta forma de importar se llama commonJS
const {suma} = require('../sum');
console.log(suma(4,6));