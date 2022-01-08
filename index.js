const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(cors({ 'origin': '*' }))
   .use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
   .use(bodyParser.json({ limit: '10mb', extended: true }));

app.get('/api/pokemon/getPokemons', (req, res) => {
    try {
        const pok = require('./controllers/c_pokemon');
        let msj = pok.getPokemons();
        if(false) {
            throw {msj : 'El error no se sabe', status: 1};
        }
        if(false) {
            throw {msj : 'El error si se sabe', status: 2};
        }
        return res.status(200).send(msj);
    } catch (err) {
        return res.status(500).send(err);
    }
});

app.get('/api/pokemon/getPokemonById', (req, res) => {
    const pok = require('./controllers/c_pokemon');
    let msj = pok.getPokemonById(req.query);
    res.send(msj);
});

app.post('/api/pokemon/crearPokemon', (req, res) => {
    console.log(req.body.nombre);
    // model
    res.send('El pokemon no existe');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});