import "../css/card.css"

const Card = (props) => {
  const {poke} = props
  console.log(poke)

  return (
    <div className="flex">
      <div>
        <img
          src={poke.sprites.other["official-artwork"].front_default}
          alt={poke.name}
        />
        <h2>{poke.name}</h2>
        <hr />
        <p className="hp">HP {poke.stats[0].base_stat}</p>
        <div className="data">
          <div className="subData">
            <p>Tipo</p>
            <p>{poke.types[0].type.name}</p>
          </div>
          <div className="subData">
            <p>Peso</p>
            <p>
              {poke.weight / 10} <span>Kg</span>
            </p>
          </div>
          <div className="subData">
            <p>Altura</p>
            <p>
              {poke.height / 10} <span>M</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
