import {readFile} from 'node:fs/promises'
console.log('Leyendo el primer archivo')
const text= await readFile('./texto.txt','utf-8')
console.log(text)
console.log('Haciendo cosas de mientras...........')
console.log('Leyendo el segundo archivo')
const text2= await readFile('./texto2.txt','utf-8')
console.log(text2)