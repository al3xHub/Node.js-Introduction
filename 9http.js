const http = require('node:http');
const {findAvailablePort}= require('./10free_port.js');

const server = http.createServer((req, res) => {
    res.end('Hello World');

})
//El puerto 0 automaticamente busca un puerto disponible

findAvailablePort(3000).then(port=>{
    server.listen(port,()=>{
        console.log(`Server is running on port http://localhost:${port}`);
    })
})