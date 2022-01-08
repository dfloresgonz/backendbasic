function getPokemonById(params) {
    if(params.id == 11) {
        return 'El pokemon es pikachu';
    }
    return 'El pokemon no existe';
}

function getPokemons() {
    const m = require('../model/m_pokemon');
    const pokemons =  m.getPokemons();
    return pokemons;
}

module.exports = {
    getPokemonById,
    getPokemons
}