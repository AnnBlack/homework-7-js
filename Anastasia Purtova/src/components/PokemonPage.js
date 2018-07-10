import React, { Component } from 'react';
import PokemonsServise from '../servises/pokemons';
import PokemonCard from '../components/pokemonCard';

class PokemonPage extends Component {
  render() {
    const pokemon = PokemonsServise.findBy({name: this.props.match.params.name})[0];
    return (
      <div>
        <h2>Pokemon</h2>
        <PokemonCard pokemon={pokemon} type='full' />
      </div>
    );
  }
}
export default PokemonPage;
