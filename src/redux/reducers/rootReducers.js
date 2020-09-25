import { combineReducers } from "redux";
import game_shop from './gameShopReducer';
import searcher from './searcherReducer';

const rootReducers = combineReducers({
    game_shop,
    searcher
});

export default rootReducers;