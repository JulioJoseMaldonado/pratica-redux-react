import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

const StockPokemonHook = () => {

    const game_shop = useSelector((state) => state.game_shop);
    return (
        <React.Fragment>
            <div className="text-info">
                Unidades: {game_shop.stockPokemon}
            </div>
        </React.Fragment>
    )
}


export default StockPokemonHook;
