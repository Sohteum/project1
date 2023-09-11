import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonDetail = ({pokemon}) => {

  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    axios.get(pokemon.url)
        .then(response => {
            //console.log(response.data);
            setPokemonData(response.data.results);
        })
        .catch(err => console.log("Error getting Pokemon's Data", err));
}, [pokemon.url]);

if(!pokemonData) return <h2 >Loading </h2> ;
  return (
    <div>
      
    </div>
  );
};

export default PokemonDetail;