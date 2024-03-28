function NavBar({ pokemonIndex, pokemonList, handleClickPrécédent, handleClickSuivant }) {
    return ( 
     
        <nav>
          <ul>
          {pokemonIndex === 0 ? (
            <li ><button onClick={handleClickSuivant}>Suivant</button></li>
              ) : pokemonIndex === pokemonList.length - 1 ? (
            <li ><button onClick={handleClickPrécédent}>Précédent</button></li>
              ) : (
           <>
              <li> <button onClick={handleClickPrécédent}>Précédent</button></li>
              <li ><button onClick={handleClickSuivant}>Suivant</button></li>
           </>
             )}
          </ul>
        </nav>
  
    );
  }
  
  export default NavBar;