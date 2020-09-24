
import {BUY_POKEMON, RETURN_POKEMON} from '../actions/gameShopAction';

const default_game_shop = {
    stockPokemon: 30,
    initStockPokemon: 30
};

const game_shop = (state=default_game_shop, action) =>{
    switch(action.type){
        case BUY_POKEMON: {
            return {
                ...state,
                stockPokemon: state.stockPokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                ...state,
                stockPokemon: state.stockPokemon + action.payload
            }
        }
        default: return state;
    }
}

export default game_shop;