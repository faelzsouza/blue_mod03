const express = require('express')
const db = require('./models/database/conn')

const app = express();
const port = 3000;

db('blue_aula12')
app.use(express.json());
const musicaRotas = require('./routes/musicas.routes')
app.use('/musica', musicaRotas)

app.listen(process.env.PORT || port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})