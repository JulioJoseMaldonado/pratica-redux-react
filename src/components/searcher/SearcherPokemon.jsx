import React, { useState } from  'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/searcherAction';


const SearcherPokemon = () => {

    const dispatch = useDispatch();
    const [pokemon_name, set_pokemon_name] = useState('mewwo');

    return(
        <div className="form-group">
            <label htmlFor="search_pokemon" className="text-white">Search Pokemon</label>
            <input type="text" className="form-control" id="search_pokemon" 
                value={pokemon_name}
                onChange={
                    (event) =>{
                        set_pokemon_name(event.target.value);
                    }
                }/>
            <button className="btn btn-primary mt-3" onClick={
                () =>{
                    dispatch(fetchPokemon(pokemon_name));
                }
            }> Search </button>
        </div>

    );

}

export default SearcherPokemon;