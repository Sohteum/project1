import React from 'react';

const PokemonList = ({pokemon}) => (
  <div>
    {pokemon.map(p => (
      <div key={p}>{p}</div>
    ))}
  </div>
);

export default PokemonList;