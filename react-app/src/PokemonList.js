import React, { useEffect, useState } from 'react';
import axios from "axios";

const PokemonList = () => {


  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true)
  // const [page, setPage] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(`https://pokeapi.co/api/v2/pokemon`).then(res => {
      setLoading(false)
      setPokemon(res.data.results(p=>p.name))
    })

    return () => cancel()
  }, [])


  if (loading) return "Loading..."

  return (
    <div>
       {pokemon ? <div key={p}>{p}</div> : <div>loading</div>}
    </div>
  );

};

export default PokemonList;