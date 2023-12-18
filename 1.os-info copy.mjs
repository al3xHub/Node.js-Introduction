// ECMASCRIPT

// import { platform, release, arch, cpus, totalmem, freemem, uptime } from 'node:os'; //<-- importando uno por uno
import os from 'node:os' //<-- importando todo

console.log('Información del sistema operativo:');
console.log('Plataforma: ', os.platform());
console.log('Versión: ', os.release());
console.log('Arquitectura',os.arch());
console.log('CPUs',os.cpus()); //<-- vamos a poder escalar procesos en node
console.log('Memoria total',os.totalmem()/1024/1024);
console.log('Memoria libre',os.freemem()/1024/1024);
console.log('Uptime= Tiempo que lleva encendido el PC: ',os.uptime()/60/60);

