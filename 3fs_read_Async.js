const fs = require('node:fs')
console.log('Leyendo archivo asíncrono')
fs.readFile('./texto.txt', 'utf-8', (err, text)=>{ //<-- Se le llama a esto callback
    console.log(text)
})
console.log("haciendo cosas de mientras que lee el archivo")