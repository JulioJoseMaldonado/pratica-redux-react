import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import StockPokemonHook from './components/StockPokemon.hook';
import BuyPokemonHook from './components/BuyPokemon.hook';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store}>
      <div className="App container">
          <div className="row">
            <div className="col-12">
              <div className="card mt-5 cardbackgroundcolor" style={{maxWidth: '370px'}}>
                <div className="row no-gutter">
                  <div className="col-4 row">  
                    <img src="/images/PokemonRed.jpg" alt="Pokemon LPM" className="card-img img-fluid"></img>
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <div className="card-title h3 text-center">
                        <StockPokemonHook />
                      </div>
                      <BuyPokemonHook />
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
      </div>
    </Provider>
  );
}

export default App;
