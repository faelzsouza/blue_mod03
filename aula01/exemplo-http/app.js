const http = require('http');

http.createServer(function (req, res){
    res.end('<h1>Ola</h1>');
}).listen(3000);

console.log('Server rodando em http://localhost:3000');