// Vamos agora dar início a primeira parte do 2º projeto que desenvolveremos ao longo dos codelabs 2, 4 e 5.1. O projeto será desenvolvido com o tema : Games.
// Na 1ª parte do projeto trabalharemos com o seguinte:
// Get => Para retornar a lista de games previamente cadastrada.
// Get => Para retornar apenas um único game pelo ID.

const express = require("express");
const app = express();

const port = 3000;

const games = [
  "Overwatch",
  "GTA V",
  "League Of Legends",
  "Fortnite",
  "BattleField 5",
];

app.get("/", (req, res) => {
  res.send("Bem vindo(a) a lista de games do Raffa!");
});

app.get("/games", (req, res) => {
  res.send(`<h1>Meus games:</h1><p>${games}</p>`);
});

app.get("/games/:id", (req, res) => {
  const id = req.params.id - 1;
  if (id > games.length - 1 || id < 0) {
    res.send("Opção inválida!");
  } else {
    const game = games[id];
    res.send(`<h2>Você selecionou o game:</h2><p>${game}</p>`);
  }
});

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

app.get("/gamerandom", (req, res) => {
  const n = randomMinMax(0, games.length);
  res.send(`<p>Jogo sorteado:</p><strong>${games[n]}</strong>`);
});

app.listen(port, () => {
  console.info("Rodando em http://localhost:3000");
});
