import PropTypes from "prop-types";
function NavBar({pokemonList, handleClickIndex}) {
    return ( 
     
        <nav>
         
         {pokemonList.map((pokemon, index) => 
         
         <button key = {pokemon.name} onClick={() =>
          
          {pokemon.name === "pikachu" ? (alert("pika pikachu !!!"), handleClickIndex) : 
          handleClickIndex(index)}}>{pokemon.name}</button>
         
         
         )}

        </nav>
  
    );
  }

  NavBar.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    handleClickIndex: PropTypes.func,
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  }
  
  export default NavBar;