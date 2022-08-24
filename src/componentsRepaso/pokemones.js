
// Funcion para manejar la API
// Trae los pokemones en un Array, solo los nombres con uri
function getPokemons() {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
    .then(response => response.json()) // Esta linea hace que se convierta a un objeto comun
    .then(data => data.results) 
    .catch(err => console.error(err))
}

// Funcion para traer 1 pokemon especifico con ID con todos sus datos
function getPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => data)
}

export {
    getPokemons,
    getPokemon
}