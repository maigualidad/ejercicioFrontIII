import { useState, useEffect } from "react";
import { getPokemon, getPokemons } from "../componentsRepaso/pokemones";
import Pokedex from "../componentsRepaso/pokedexN";
//import Pokemones from "./pokemon";
import Pokemones from "../componentsRepaso/pokemon"
import "../styles/App.css";


const AppN = () => {
//   const [pokedex, setPokedex] = useState([]);
  const [estado, setEstado] = useState(true);
  const [pokemonInicial, setPokemonInicial] = useState({});
  const [pokemonPosicion, setPokemonPosicion] = useState(Math.floor(Math.random()*150+1))

  // Llama al listado de pokemones
//   useEffect(() => {
//     getPokemons().then((listadoPokemones) => {
//       setPokedex(listadoPokemones);
//       setEstado(false);
//     });
//   }, []);

  // Llama a nuestro pokemon inicial, es decir, uno solo
  useEffect(() => {
    getPokemon(pokemonPosicion).then((unPokemon) => {
      setPokemonInicial(unPokemon);
      setEstado(false);
    });
  }, );


  if (estado) {
    return (
      <div>
        <p>Cargando</p>
      </div>
    );
  }

  const update = (posicion) => {
      setPokemonPosicion(posicion);
  };

  return (
    <div style={{ display: "flex" }}>
    <div className="container">
      <Pokemones nombre={pokemonInicial.name} numero={pokemonPosicion}/>
    </div>
    <Pokedex updateParent={update} posicionActual={pokemonPosicion}/>
  </div>
  );
};

export default AppN;

