const express = require("express");
const router = express.Router();
const Musica = require("../models/musicas.models");
const checkPassword = require('../controllers/auth.controller')


router.post("/add", async (req, res) => {
    await Musica.create(req.body)
        .then(() => res.status(200).send("Música adicionada com sucesso!"))
        .catch((err) => {
            console.error(err);
            res.status(400).send(
                "Teve algum erro, você passou as informações corretamente?"
            );
        });
});

router.get("/", async (req, res) => {
    const checkAuth = () => checkPassword(req.headers.user, req.headers.password)
    console.log(checkAuth())
    await Musica.find({})
        .then((musicas) => res.status(200).send(musicas))
        .catch((err) => {
            console.error(err);
            res.status(400).send(
                "Algo deu errado! :/"
            );
        });
});

router.get("/findById/:id", async (req, res) => {
    await Musica.find({ _id: req.params.id })
        .then((musica) => res.status(200).send(musica))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

router.put("/update/:id", async (req, res) => {
    await Musica.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.status(200).send("Música atualizada!"))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

router.delete("/delete/:id", async (req, res) => {
    await Musica.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).send("Música deletada com sucesso!"))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

module.exports = router;
