import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import PokemonPage from './components/PokemonPage';
import Jail from './components/Jail';
import Pokemons from './components/pokemons';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="menu">
              <ul className="menu-list">
                <li className="menu-item"> <Link to="/">Home</Link> </li>
                <li className="menu-item"> <Link to="/jail">Jail</Link> </li>
                <li className="menu-item"> <Link to="/pokemons">Pokemons</Link> </li>
              </ul>
          </nav>
        </header>

        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/pokemon/:name" component={PokemonPage} />
            <Route path="/jail" component={Jail} />
            <Route path="/pokemons" component={Pokemons} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
