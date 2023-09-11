import React, { useEffect, useState } from 'react';
import axios from "axios";
import PokemonDetail from './PokemonDetail';

const PokemonList = () => {

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`).then(res => {
      setLoading(false)
      setPokemon(res.data)
    })

    return () => cancel()
  }, [page])


  if (loading) return "Loading..."

  return (
    <div>
       {pokemon.results ? pokemon.results.map((pokemon, index) => (
              <div key = {index}>
                <PokemonDetail pokemon = {pokemon} />
              </div>
     )) : <h2 style = {{margin: "0 auto"}}>Loading</h2>}
    </div>
  );

};

export default PokemonList;