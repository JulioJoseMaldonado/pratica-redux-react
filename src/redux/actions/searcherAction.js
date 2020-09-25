import Axios from 'axios';
export const FECTH_POKEMON_REQUEST = 'FECTH_POKEMON_REQUEST';
export const FECTH_POKEMON_SUCCESS = 'FECTH_POKEMON_SUCCESS';
export const FECTH_POKEMON_FAILURE = 'FECTH_POKEMON_FAILURE';

export const fecthPokemonRequest = () => {
    return{
        type: FECTH_POKEMON_REQUEST
    }
}

export const fecthPokemonSuccess = (Pokemon) =>{
    return {
        type: FECTH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fecthPokemonFailure = (error) =>{
    return{
        type: FECTH_POKEMON_FAILURE,
        payload: error
    }
}

const fetchPokemon = (value) =>{
    return (dispatch) =>{
        dispatch(fecthPokemonRequest());
        Axios.get('https://pokeapi.co/api/v2/pokemon/' + value)
             .then(response => {
                dispatch(fecthPokemonSuccess([response.data]));
             })
             .catch(error =>{
                dispatch(fecthPokemonFailure('No se encontró el pokemon'));
             })
    }  
}

export default fetchPokemon;