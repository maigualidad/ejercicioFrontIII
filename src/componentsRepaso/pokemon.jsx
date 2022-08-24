import { useState, useEffect } from "react";
import { getPokemon, getPokemons } from "./pokemones";


const Pokemones = ({ nombre, numero }) => {
    const [pokemon, setPokemon] = useState({ nombre, numero });
    const [estado, setEstado] = useState(true);
    useEffect(() => {
      getPokemon(numero).then((pokemon) => {
        setPokemon(pokemon);
        setEstado(false);
      });
    },);
  
    if (estado) {
      return (
           <>
        <ul>
          <li>Nombre:{nombre}</li>
          <li>Numero:{numero}</li>
        </ul>
      </>
      );
    }
  
    const getImagen = () => {
        if (numero < 10) return `00${numero}`
        if (numero < 100) return `0${numero}`
        if (numero) return `${numero}`
      };


      const getTypes = () => {
        let phrase = `${pokemon.types[0]["type"]["name"]}`;
        if (pokemon.types.length === 1) return phrase;
        if (pokemon.types.length > 1) {
          for (let index = 1; index < pokemon.types.length; index++) {
          
              phrase = `${phrase} and ${pokemon.types[index]["type"]["name"]}`;
          }
          return phrase;
        }
      };

    return (
      <>
        <ul>
        {/* <li>Nombre:{nombre}</li>
          <li>Numero:{numero}</li>
          {pokemon.types.map((t)=><li>Tipo:{t.type.name}</li>)} */}
          <li><img
        id="pokemonImg"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getImagen()}.png`}
        alt={getImagen()}
      /></li>
        </ul>
        <p id="name">{`${nombre} is a pokemon type ${getTypes()}`}</p>
      </>
    );
  };
  
  export default Pokemones;