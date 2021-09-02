const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const usuarioModel = new mongoose.Schema({
    // _id: {},
    // acesso_ativo: {},
    // password: {},
    // ultimo_acesso: {},
    // username: {}
    // nome: { type: String, required: true },
    // sobrenome: { type: String, required: true},
    // cpf: { type: String, required: true },
    // idade: { type: Date, required: true },
    // senha: { type: String, required: true },
    // dataCriacao: { type: Date, default: Date.now }
})

const Usuario = mongoose.model('accounts', usuarioModel);

module.exports = Usuario;