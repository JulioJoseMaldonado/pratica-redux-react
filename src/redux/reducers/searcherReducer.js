import { FECTH_POKEMON_SUCCESS, FECTH_POKEMON_FAILURE, FECTH_POKEMON_REQUEST} from '../actions/searcherAction';

const initilaState = {
    loading: false,
    pokemon: [],
    error: ''
}

const searcher = (state = initilaState, action) =>{
    switch (action.type){
        case FECTH_POKEMON_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FECTH_POKEMON_SUCCESS:
            return{
                loading:false,
                pokemon: action.payload,
                error: ''
            }
        case FECTH_POKEMON_FAILURE:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }
        default: return state;
    }
}

export default searcher;