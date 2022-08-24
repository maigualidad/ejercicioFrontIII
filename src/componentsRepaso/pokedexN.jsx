import { pokeContainer, pokeList, pokeOption } from "../styles/styles";

const Pokedex = ({ updateParent, posicionActual }) => {
  return (
    <div style={pokeContainer}>
      <h3>POKEDEX</h3>
      <div style={pokeList}>
        <button
          style={pokeOption}
          onClick={() => updateParent(posicionActual - 1)}
        >
          Anterior
        </button>
        <button
          style={pokeOption}
          onClick={() => updateParent(posicionActual + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Pokedex;
