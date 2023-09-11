import React, { useEffect, useState } from 'react';
import axios from "axios";

const PokemonList = () => {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(res => {
      setLoading(false)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [])


  if (loading) return "Loading..."

  return (
    <div>
    {pokemon.map(p => (
      <div key={p}>{p}</div>
    ))}
  </div>

  )

};

export default PokemonList;