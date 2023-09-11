
//https://pokeapi.co/api/v2/pokemon
import PokemonDetail from "./PokemonDetail";
import PokemonList from "./PokemonList";
import {  Route,  Routes } from "react-router-dom";

function App() {

  return (
    < >
      <Routes>
        <Route path="/" element={<PokemonList/>} />
        <Route path="/detail/:" element={<PokemonDetail/>} />

      </Routes>
    </>
  )
};
export default App;
