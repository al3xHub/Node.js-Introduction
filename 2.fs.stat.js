// fs= file system
const fs= require('node:fs')
const stats = fs.statSync('./texto.txt')

console.log(stats.isFile(), //si es fichero
stats.isDirectory(), //si es carpeta
stats.isSymbolicLink(), //si es enlace simbolico
stats.size); //tamaño en bytes