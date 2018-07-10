import React, { Component } from 'react';
import PokemonsServise from '../servises/pokemons';
import PokemonCard from '../components/pokemonCard';

class Pokemons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 10,
      pokemons: PokemonsServise.findBy(),
    }
  }

  onCatch(pokemon) {
    PokemonsServise.onCatched(pokemon);
    this.setState({pokemons:PokemonsServise.findBy()})
  }

  render() {
    const pokemonsArr = this.state.pokemons.filter((pokemon, index) => this.state.counter > index );
    const PokemonList = (props) => {

      const items = pokemonsArr.map((pokemon, index) =>
        <PokemonCard key={pokemon.id} pokemon={pokemon} onCatch={(props) => this.onCatch(props)}/>
      );
      return <ul className="pokemons-list">{items}</ul>
    }

    return (
      <div>
        <h1>Keep catching Pokemons!</h1>
        <PokemonList pokemonsArr={pokemonsArr}/>
        <button onClick={() => this.setState({counter: this.state.counter + 10})} className="loading-btn">Load More</button>
      </div>
    );
  }

}

export default Pokemons
