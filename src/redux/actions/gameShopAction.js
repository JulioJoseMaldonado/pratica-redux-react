export const BUY_POKEMON = 'BUY_POKEMON';
export const RETURN_POKEMON = 'RETURN_POKEMON';

export const buy_pokemon = (cant) =>{
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

export const return_pokemon = (cant) =>{
    return{
        type: RETURN_POKEMON,
        payload: cant
    }
}