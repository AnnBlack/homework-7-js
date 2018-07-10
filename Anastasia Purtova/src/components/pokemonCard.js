import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Pokemon = ({pokemon, type, onCatch}) => {
  return (
    <li style={{opacity: pokemon.catched && type !== 'full' ? 0.5 : 1}} className="pokemons-item">
    <Link to={`/pokemon/${pokemon.name}`}>
      <img src={`/pokemons/${pokemon.id}.png`} alt={`${pokemon.name}.png`}/>
    </Link>
    <span>id: {pokemon.id}</span>
    <span>Name: {pokemon.name}</span>
    <p style={{opacity: pokemon.catched ? 1 : 0}}>Catching time: {pokemon.time}</p>

    {
      type === 'full' ?
      <span>Is he caught? : {pokemon.catched + ''}</span>
      :null
    }

    {
      onCatch ?
       <button onClick={ () => onCatch(pokemon) } className="pokemons-btn" style={{opacity: pokemon.catched ? 0 : 1}}>Catch</button>
       :null
    }

  </li>
  )
}
export default Pokemon
