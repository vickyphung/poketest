import './App.css';
import { useState, useEffect } from 'react'
import PokemonDetail from './components/PokemonDetail';
import PokemonList from './components/PokemonList';
import { Link } from 'react-router-dom'

import { Route, Routes } from "react-router-dom";

function App() {
  const url = `https://pokeapi.co/api/v2/pokemon`;

  const [pokemon, setPokemon] = useState(null)

  const getPokemon = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      //sets data as state
      setPokemon(data)
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <div className="App">
      {console.log(pokemon)}


      <Routes>
        <Route path="/details" element={<PokemonDetail />} />

      </Routes>


      {pokemon?.results?.map((pokemon, index) => (
        <div key={index}>
          <h1>  {pokemon?.name}</h1>
          {pokemon.url}
          <div>
            <PokemonDetail pokemonUrl={pokemon.url} />
            {/* <Link to = '/details'>{pokemon?.name}</Link> */}
          </div>
        </div>
      ))}





    </div>
  );
}

export default App;