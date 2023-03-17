import "../css/home.css"

import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home">
      <h1>¡Bienvenido maestro Pokémon!</h1>
      <p>Ingresa a la sección <span><Link to="/pokemons" className="link">Pokémon</Link></span> para comenzar</p>
    </div>
  )
}

export default Home
