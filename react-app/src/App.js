
//https://pokeapi.co/api/v2/pokemon

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPage(res.data.next)
      setPrevPage(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPage])


  function gotoNextPage() {
    setCurrentPage(nextPage)
  }
  function gotoPrevPage() {
    setCurrentPage(prevPage)
  }


  if (loading) return "Loading..."

  return (
    <>
      <PokemonList onClick={pokemon} pokemon={pokemon} />
      <Pagination 
      gotoNextPage={nextPage ? gotoNextPage:null} 
      gotoPrevPage={prevPage ? gotoPrevPage:null}/>
    </>
  )
};
export default App;
