import React from 'react';
import { useSelector } from 'react-redux';



const ResultPokemon = () => {

    const searcher = useSelector((state)=>state.searcher);
    return(
        <div>
            <h3 className="text-white">Result: </h3>
            {searcher.loading && <div className="text-warning">Searching...</div>}
            {   
                searcher.pokemon.length >=1 &&
                <div className="text-success">
                    <img src={searcher.pokemon[0].sprites.front_default} alt="pokemon"/>
                    <span>{searcher.pokemon[0].name}</span>
                </div>
            }
            {searcher.error !== '' && <span className="text-danger">Error</span>}
        </div>
    
    )
}
export default ResultPokemon;