import "../css/search.css"

import {useContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import Context from "../context"

const Search = () => {
  const {pokemons} = useContext(Context)
  const [pokeName, setPokeName] = useState("bulbasaur")
  const navigate = useNavigate()
  const toPokeDetails = () => {
    navigate(`/pokemons/${pokeName}`)
  }

  return (
    <div className="search">
      <h2>Selecciona un Pokémon</h2>
      <div className="selectSection">
        <select onChange={(e) => setPokeName(e.target.value)}>
          {pokemons.map((element) => (
            <option
              value={element.name}
              key={element.name}  
            >
              {element.name}
            </option>
          ))}
        </select>
        <button onClick={toPokeDetails}>Ver detalles</button>
      </div>
    </div>
  )
}

export default Search
