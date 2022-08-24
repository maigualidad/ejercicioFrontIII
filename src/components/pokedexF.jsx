import {pokeContainer, pokeList, pokeOption} from '../styles/styles'


const Pokedex = ({ updateParent, pokemons }) => {
    return (
      <div style={pokeContainer}>
        <h3>POKEDEX</h3>
        <div style={pokeList}>
          {pokemons.map((pokemon, index) => (
            <p
              key={index}
              onClick={() =>
                updateParent(
                  [pokemon.name, pokemon.id, pokemon.type]
                )
              }
              style={pokeOption}
            >
              {pokemon.name}
            </p>
          ))}
        </div>
      </div>
    );
  };

export default Pokedex;