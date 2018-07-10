import React from 'react';
import Pokemons from '../components/pokemons';

import {
  Link,
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Welcome to the Pokedex Game!</h2>
    <p> Start catching your first pokemon!</p>
    <p> You can see pokemons you have been caught on the <Link to="/Jail">Jail</Link> page!</p>

    <Pokemons />

  </div>
);

export default Home;
