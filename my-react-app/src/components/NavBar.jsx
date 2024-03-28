
import React from 'react';
function NavBar({ pokemonIndex, pokemonList, handleClickIndex}) {
    return ( 
     
        <nav>
         
         {pokemonList.map((pokemon, index) => 
         
         <button key = {pokemon.name} onClick={() =>{handleClickIndex(index)}}>{pokemon.name}</button>

         
         )}

        </nav>
  
    );
  }
  
  export default NavBar;