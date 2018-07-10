import React, { Component } from 'react';
import PokemonsServise from '../servises/pokemons';
import PokemonCard from '../components/pokemonCard';

class Jail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 10,
      pokemons: PokemonsServise.findBy({catched:true}),
    }
  }

  render() {
    const pokemonsArr = this.state.pokemons.filter((pokemon, index) => this.state.counter > index );
    console.log(this.state.pokemons.length);
    const PokemonList = (props) => {

      const items = pokemonsArr.map((pokemon, index) =>
        <PokemonCard key={pokemon.id} pokemon={pokemon} type='full' onCatch={(props) => this.onCatch(props)}/>
      );
      return <ul className="pokemons-list">{items}</ul>
    }

    return (
      <div>
      <h1>Pokemons you have been caught: </h1>
        <PokemonList pokemonsArr={pokemonsArr}/>
           <button onClick={() => this.setState({counter: this.state.counter + 10})}
            className="loading-btn"
            style={{display: this.state.pokemons.length > this.state.counter ? 'inline' : 'none'}}>Load PokemonsServise
          </button>
      </div>

    );
  }
}

export default Jail
