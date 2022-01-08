function getPokemons() {
    const pokemons =  [
        {
            id: 1,
            name: 'pikachu'
        },
        {
            id: 2,
            name: 'raichu'
        },
        {
            id: 3,
            name: 'charizard'
        }
    ]
    return pokemons;
}

module.exports = {
    getPokemons
}