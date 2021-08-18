const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('Hello world!');
});

app.get('/blue', function (req, res){
    res.send('<h1>Welcome, Bluemer!</h1>')
})

app.listen(3000)
console.log('Server rodando em http://localhost:3000')