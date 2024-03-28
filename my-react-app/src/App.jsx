import PokemonCard from "./components/PokemonCard"
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
const [pokemonIndex, setPokemonIndex] = useState(0);
const handleClickIndex =(index) => {
  setPokemonIndex(index)
  
}

/* console.log(pokemonIndex) */

  return ( 
     <div>
   <NavBar 
    pokemonIndex={pokemonIndex}
    pokemonList={pokemonList}
    handleClickIndex={handleClickIndex}
     
   />
   <section>
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </section> 
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