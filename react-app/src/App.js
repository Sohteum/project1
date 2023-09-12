import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Spinner } from 'reactstrap';
import Character from "./components/Character";
import Pages from "./components/Pages";



function App() {
  const [pokemonData, setPokemonData] = useState({});
  const [page, setPage] = useState("");

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${page}`)
      .then(response => {
        //console.log(response.data.pokemon_entries);
        setPokemonData(response.data)
        /* setNextPage(response.data.next.slice(response.data.next.indexOf("?")));
        setPrevPage(response.data.previous.slice(response.data.next.indexOf("?"))); */
      })
      .catch(err => console.log("Error getting list", err));
  }, [page]);

  
  
  return (
    <div className="App">
      
     
      <Pages pokemonData = {pokemonData} setOffset = {setPage} />
      <Container className='container'>
          
            {pokemonData.results ? pokemonData.results.map((pokemon, index) => (
              <Col key = {index}>
                <Character pokemon = {pokemon} />
              </Col>
            )) : <h2 style = {{margin: "0 auto"}}>Loading <Spinner /></h2>}
          
      </Container>
      <Pages pokemonData = {pokemonData} setOffset = {setPage} />
    </div>
  );
}

export default App;
