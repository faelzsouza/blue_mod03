const express = require("express");
const app = express();

const port = 3000;

app.use(express.json()); // faz as reqs trabalhar com json

const filmes = [
    {
        id: 1,
        titulo: "As Branquelas",
        linkImagem:
            "http://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg",
    },
    {
        id: 2,
        titulo: "Vovozona",
        linkImagem:
            "http://1.bp.blogspot.com/-VVXh6jtrHjA/UAjha-z-3hI/AAAAAAAACEU/yLbkiZWam88/s1600/A.VovoZona.DVDRIP.Xvid.Dublado.JPG",
    },
    {
        id: 3,
        titulo: "Crepúsculo",
        linkImagem:
            "https://pelisflix.li/wp-content/uploads/2020/06/doBL002Frm4ts7ABkc15ekpKVGW.jpg",
    },
    {
        id: 4,
        titulo: "Amanhecer",
        linkImagem:
            "http://4.bp.blogspot.com/-8aOe9IuT67g/TzKBD1OmL8I/AAAAAAAAI74/YxWhh5JEPAM/w1200-h630-p-k-no-nu/Amanhecer+(Poster+Cinema).jpg",
    },
    {
        id: 5,
        titulo: "Jogos Vorazes: Em Chamas",
        linkImagem:
            "https://3.bp.blogspot.com/-k3RzqbAhGz0/VHksvRxeh1I/AAAAAAAABaQ/RHkmT1R4KSk/s1600/21047331_201310071632457.jpg",
    },
    {
        id: 6,
        titulo: "Titanic",
        linkImagem:
            "https://2.bp.blogspot.com/-HvX7NG_1o9Y/T3NVzbLjydI/AAAAAAAAJRE/iGi3x0he6k8/s640/Titanic+3D-Camp+B-1.jpg",
    },
];

const getFilmesValidos = () => filmes.filter(Boolean);

const getFilmeById = (id) =>
    getFilmesValidos().find((filme) => filme.id == id);

const getFilmeByTitulo = (titulo) =>
    getFilmesValidos().find((filme) => filme.titulo == titulo);

app.get("/", (req, res) => {
    res.send("Hello fella---da puta!");
});

app.get("/filmes", (req, res) => {
    res.send(getFilmesValidos());
});

app.post("/filmes", (req, res) => {
    const filme = req.body;
    const len = filmes.length;

    if (getFilmeByTitulo(filme.titulo)) {
        res.send(`O filme ${filme.titulo} já está na lista!`);
    } else if (!Object.keys(filme).length) {
        res.status(400).send({
            message: "JSON precisa das keys id: '', titulo e linkImagem!",
        });
    } else if (!filme.titulo || !filme.linkImagem) {
        res.status(400).send({
            message: "Está faltando a key titulo ou a linkImagem!",
        });
    }

    filme.id = filmes[len - 1].id + 1;
    filmes.push(filme);
    res.send(
        `O filme ${filme.titulo} adicionado com sucesso a lista. </br>Agora a lista tem ${len} filmes!`
    );
});

app.get("/filmes/:id", (req, res) => {
    const id = req.params.id;

    const filme = getFilmeById(id);

    if (!filme) {
        res.send("Filme não consta na lista!");
    }
    res.send(filme);
});

app.put("/filmes/:id", (req, res) => {
    const id = req.params.id;
    const filme = req.body;
    res.send(
        `Filme ${getFilmeById(id).titulo} alterado para ${
            filme.titulo
        } com sucesso!`
    );
    filmes[filmes.indexOf(getFilmeById(id))] = {
        ...getFilmeById(id),
        ...filme,
    };
});

app.delete("/filmes/:id", (req, res) => {
    const id = req.params.id;
    const filme = req.body;
    if (!getFilmeById(id)) {
        res.send("Não existe filme com essa posição");
    }
    res.send(`Filme ${getFilmeById(id).titulo} deletado com sucesso!`);
    delete filmes[filmes.indexOf(getFilmeById(id))];
});

app.listen(port, () => {
    console.info(`Executando na porta http://localhost:${port}`);
});

if(!undefined){
    console.log('oi')
}