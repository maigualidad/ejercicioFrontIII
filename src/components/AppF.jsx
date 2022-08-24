import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/App.css";
import Pokedex from "../components/pokedexF";

const AppF = () => {
  const pokedex = [
    {
      id: 1,
      name: "Bulbasaur",
      type: ["Grass", "Poison"],
    },
    {
      id: 2,
      name: "Ivysaur",
      type: ["Grass", "Poison"],
    },
  ];
  // AREA DE TRABAJO --> Usar estructura de Class Component
  const pokemon = [pokedex[0].name, pokedex[0].id, pokedex[0].type];
  const pokemons = pokedex;
  // AREA DE TRABAJO -------------------------------------------

  const [poke, setState] = useState(pokemon);

  const update = (pokemon) => {
    console.log("update", pokemon);
    setState(pokemon);
  };

  const getPokemon = () => {
    console.log("getPokemon", poke);
    return `00${poke[1]}`;
    // if (poke?.length === 1) return `00${poke}`
    // if (poke?.length === 2) return `0${poke}`
    // if (poke?.length === 3) return `${poke}`
  };

  const getTypes = () => {
    let phrase;
    if (pokemon[2].length === 1) return pokemon[2][0];
    if (pokemon[2].length > 1) {
      for (let index = 0; index < pokemon[2].length; index++) {
        if (index === 0) phrase = pokemon[2][index];
        if (index !== 0) phrase = `${phrase} and ${pokemon[2][index]}`;
      }
      return phrase;
    }
  };

  /* AREA DE TRABAJO
    Pueden usar desestructuracion o directamente modificar las variables pokemon por this.state...
    */
  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <img
          id="pokemonImg"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemon()}.png`}
          alt={pokemon[0]}
        />
        <p id="name">{`${pokemon[0]} is a pokemon type ${getTypes()}`}</p>
      </div>
      <Pokedex updateParent={update} pokemons={pokemons} />
    </div>
  );
};

export default AppF;
