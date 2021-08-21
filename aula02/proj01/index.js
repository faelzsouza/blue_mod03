const express = require("express");
const app = express();

const port = 3000;

const filmes = ["Titanic", "Matrix", "Vovozona"];

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bem vindos!");
});

app.get("/filmes", (req, res) => {
    res.send(filmes);
});

app.post("/filmes", (req, res) => {
    const filme = req.body.filme;
    filmes.push(filme);
    const len = filmes.length;
    res.send(
        `Filme: ${filme} adicionado com sucesso à lista. Agora a lista tem ${len} filmes.`
    );
});

app.get("/filmes/:id", (req, res) => {
    const id = req.params.id - 1;
    const filme = filmes[id];
    if (id < 0 || id >= filmes.length || !filmes[id]) {
        res.send("Filme não consta na lista!");
    }
    res.send(filme);
});

app.put("/filmes/:id", (req, res) => {
    const filme = req.body.filme;
    const id = req.params.id - 1;
    res.send(`Filme ${filmes[id]} alterado para ${filme} com sucesso!`);
    filmes[id] = filme;
});

app.delete("/filmes/:id", (req, res) => {
    const id = req.params.id - 1;
    if (id < 0 || id >= filmes.length || !filmes[id]) {
        res.send("Filme não consta na lista!");
    }
    res.send(`Filme ${filmes[id]} deletado da lista!`);
    delete filmes[id];
});

app.listen(port, () => {
    console.info(`Server rodando em http://localhost:${port}`);
});
