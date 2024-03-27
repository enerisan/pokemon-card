import PokemonCard from "./components/PokemonCard"
import "./App.css";
import { useState } from "react";

function App() {
const [pokemonIndex, setPokemonIndex] = useState(0);


const handleClickPrécédent = () => {
  setPokemonIndex(pokemonIndex -1)
  console.log(pokemonIndex)

}
const handleClickSuivant = () => {
  setPokemonIndex(pokemonIndex +1)
  console.log(pokemonIndex)
}


  return (
    <div>
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    {pokemonIndex === 0 ? (
      <button onClick={handleClickSuivant}>Suivant</button>
    ) : pokemonIndex === pokemonList.length - 1 ? (
      <button onClick={handleClickPrécédent}>Précédent</button>
    ) : (
      <>
        <button onClick={handleClickPrécédent}>Précédent</button>
        <button onClick={handleClickSuivant}>Suivant</button>
      </>
    )}
  </div>
);
}



const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App;