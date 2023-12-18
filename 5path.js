const path = require('node:path');
// barra separadora de carpetas segun el sistema operativo
console.log(path.sep);
// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);
// conseguir el nombre del fichero
const base = path.basename('/folder/subfolder/textos/texto.txt');
console.log(base);
// conseguir nombre del fichero sin la extension
const base2 = path.basename('/folder/subfolder/textos/texto.txt', '.txt');
console.log(`El nombre del fichero es "${base2}"`);
// extension
const ext = path.extname('/folder/subfolder/textos/texto.txt');
console.log(ext);