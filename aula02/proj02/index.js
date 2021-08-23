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

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bem vindo(a) a lista de games do Raffa!");
});

app.get("/games", (req, res) => {
  const listaComTagP = [];
  games.forEach(game => listaComTagP.push(`<p>${game}</p>`))
  res.send(`<h1>Meus games:</h1>${listaComTagP}`);
});

app.post("/games", (req, res) => {
  const game = req.body.titulo;
  games.push(game);
  const len = games.length;
  res.send(
    `Jogo: ${game} adicionado a lista com sucesso! A lista agora tem ${len} jogos.`
  )
})

app.get("/games/:id", (req, res) => {
  const id = req.params.id - 1;
  if (id > games.length - 1 || id < 0) {
    res.send("Não existe um jogo com esse ID!");
  } else {
    const game = games[id];
    res.send(`<h2>Você selecionou o game:</h2><p>${game}</p>`);
  }
});

app.put('/games/:id', (req, res) => {
  const id = req.params.id - 1;
  const game = req.body.titulo;
  if (id > games.length - 1 || id < 0) {
    res.send("Não existe um jogo com esse ID!");
  } else {
    res.send(`Você alterou o jogo ${games[id]} para ${game} com sucesso!`)
    games[id] = game;
  }
})

app.delete('/games/:id', (req, res) => {
  const id = req.params.id - 1;
  if (id > games.length - 1 || id < 0) {
    res.send("Não existe um jogo com esse ID!");
  } else {
    res.send(`O game ${games[id]} foi deletado com sucesso!`)
    games.splice(id, 1);
  }
})

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

app.get("/randomgame", (req, res) => {
  const n = randomMinMax(0, games.length);
  res.send(`<p>Jogo sorteado:</p><strong>${games[n]}</strong>`);
});

app.listen(port, () => {
  console.info("Rodando em http://localhost:3000");
});
