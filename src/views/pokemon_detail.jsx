import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import Card from "../components/card"

const PokemonDetail = () => {
  const [poke, setPoke] = useState()
  const [loading, setLoading] = useState(true)
  const {pokeName} = useParams()

  useEffect(() => {
    getPokeData()
  }, [])

  const getPokeData = async () => {
    const resPokeData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    )
    await resPokeData.json()
      .then((pokeData) => setPoke(pokeData))
      .then(() => setLoading(false))
      
  }

  if (loading !== true)
    return (
      <Card poke={poke} />
    )
}

export default PokemonDetail
