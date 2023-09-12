import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonUrl, setPokemonUrl] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        setPokemonData(res.data.results.map(p => p.name))
        setPokemonUrl(res.data.results.map(p => p.url))
      })
  }, [pokemonData])

  const fnClick = () => {
    console.log(pokemonData);
    setPokemonData()
  }


  return (
    <div>

      <div onClick={fnClick}>{pokemonData}</div>
      <div>{pokemonUrl}</div>


      pokeApp



    </div>
  );
}

export default App;
