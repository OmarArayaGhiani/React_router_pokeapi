import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react"

import Context from "./context"
import Navbar from "./components/navbar"

import Home from "./views/home"
import Pokemons from "./views/pokemons"
import PokemonDetail from "./views/pokemon_detail"

function App() {
  const [pokemons, setPokemons] = useState([])
  const sharedStates = {pokemons}

  useEffect(() =>{
    getPokemonsData()
  }, []) 
  
  const getPokemonsData = async() =>{
    const resPokemonsData = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
    const pokemonsData = await resPokemonsData.json()
    setPokemons(pokemonsData.results)
  }

  return (
    <div className="app">
      <Context.Provider value={sharedStates}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemons/" element={<Pokemons />} />
            <Route path="/pokemons/:pokeName" element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
