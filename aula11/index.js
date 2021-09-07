const express = require('express');
const mongoose = require('mongoose');

const Usuario = require('./models/usuario');

// mongoose.connect("", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })


// const usuario1 = new Usuario({
//     nome: "Rafael",
//     sobrenome: "Martins",
//     cpf: "00000000000",
//     idade: "1991-02-15",
//     senha: '123',
// })


// usuario1.save().then(() => console.log('Usuário Salvo!')).catch((err) => console.log(err))

const app = express();
const port = 3000;

app.get('/usuarios', (req, res) => {
    Usuario.find({})
    .then((usuarios) => {
        console.log(usuarios)
        res.send(usuarios)
    })
    .catch((err) => console.log(err))
})

app.listen(port, () => {
    console.info(`Rodando em http://localhost:${port}`)
})