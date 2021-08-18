const express = require("express");
const app = express();

const port = 3000;

const filmes = ["Titanic", "Matrix", "Vovozona"];

app.get("/", (req, res) => {
  res.send("Bem vindos!");
});

app.get("/filmes", (req, res) => {
  res.send(filmes);
});

app.get("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filme = filmes[id];
  res.send(filme);
});

app.listen(port, () => {
  console.info(`Server rodando em http://localhost:${port}`);
});
