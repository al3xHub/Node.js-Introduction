// otra forma de mostrar informacion de manera asincrona es con 'promises'
const fs = require('node:fs/promises')
console.log('Leyendo archivo asíncrono')
fs.readFile('./texto2.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })
console.log("haciendo cosas de mientras que lee el archivo")