import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch"


const PokeIdPage = () => {

  const { id } = useParams ()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const [ pokemon, getPokemon ] = useFetch(url)

console.log(pokemon)

  useEffect (()=> {
    getPokemon ()
  }, [id])

  return (
    <article>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>
    </article>
  )
}

export default PokeIdPage
