// argumentos de entrada
console.log(process.argv);
// controlar el proceso y su salida. Con 0 todo bien con 1 algo ha ido mal.
// process.exit(0);

// directorio que estamos en el proceso
console.log(process.cwd());
// controlar eventos del proceso
process.on('exit', function(code) {
    console.log('Saliendo con el codigo:', code);
})
