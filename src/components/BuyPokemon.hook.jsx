import React from  'react';
import { useSelector, useDispatch } from 'react-redux';
import {buy_pokemon, return_pokemon} from '../redux/actions/gameShopAction'

const BuyPokemonHook = () => {

    const game_shop = useSelector((state) => state.game_shop);
    const dispatch = useDispatch();
    return(
        <div>
            <button className="btn btn-dark btn-sm mb-2" disabled={game_shop.stockPokemon<1} onClick={()=>{
                dispatch(buy_pokemon(1));
            }}> Buy Pokemon</button>
            <button className="btn btn-dark btn-sm" disabled={game_shop.stockPokemon>=game_shop.initStockPokemon} onClick={()=>{
                dispatch(return_pokemon(1));
            }}> Return Pokemon </button>
        </div>
    )
}

export default BuyPokemonHook;