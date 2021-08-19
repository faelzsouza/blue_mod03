const express = require("express");
const app = express();

const port = 3000;

app.use(express.json()); // faz as reqs trabalhar com json

const filmes = [
    "As Branquelas",
    "Vovozona",
    "Crepúsculo",
    "Amanhecer",
    "Jogos Vorazes",
    "Titanic",
];

app.get("/", (req, res) => {
    res.send("Hello fella!");
});

app.get("/filmes", (req, res) => {
    let lista = "";
    filmes.forEach((filme) => {
        lista += `<p>${filme}</p>`;
    });
    res.send(lista);
});

app.post('/filmes', (req, res) => {
    const filme = req.body.filme;
    const id = filmes.length;
    filmes.push(filme)
    res.send(`O filme ${filme} adicionado com sucesso a lista, com índice ${id - 1}. </br>Agora a lista tem ${id} filmes!`)
})

app.get('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;

    const filme = filmes[id];

    if(!filme){
        res.send('Filme não consta na lista!');
    };
    res.send(filme);
})

app.put('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = req.body.filme;
    res.send(`Filme ${filmes[id]} alterado para ${filme} com sucesso!`)
    filmes[id] = filme;
})

app.delete('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = req.body.filme;
    if(!filmes[id]){
        res.send('Não existe filme com essa posição')
    }
    res.send(`Filme ${filmes[id]} deletado com sucesso!`)
    delete filmes[id];
})

app.listen(port, () => {
    console.info(`Executando na porta http://localhost:${port}`);
});
