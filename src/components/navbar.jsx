import "../css/navbar.css"

import {NavLink} from "react-router-dom"

const Navbar = () => {
  const setActiveClass = ({isActive}) => (isActive ? "active" : undefined)
  return (
    <div className="navbar">
      <NavLink className={`navLink ${setActiveClass}`} to="/">
        Inicio
      </NavLink>
      <NavLink className={`navLink ${setActiveClass}`} to="/pokemons">
        Pokémon
      </NavLink>
    </div>
  )
}

export default Navbar
