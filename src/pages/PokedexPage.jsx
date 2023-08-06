import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import PokemonCard from "../components/PokedexPage/PokemonCard"
import useFetch from "../Hooks/useFetch"
import pokedex from '../assets/images/pokedex.png'
import '../components/PokedexPage/styles/PokedexPage.css'
import SelectType from "../components/PokedexPage/SelectType"
import {Link} from 'react-router-dom';
import PokePages from "../components/PokePages"

const PokedexPage = () => {
  const [page, setPage] = useState(0)

  const [inputValue, setInputValue] = useState('')

  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainer = useSelector(reducer => reducer.trainer)/*para traer el valor del trainerName.slice.js*/

/*crear peticion asincronica para llamar el Hook useFetch*/
  // const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=500"

  const url =`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${page*15}`
  const [ pokemons, getAllPokemons, getPokemonsByType] = useFetch(url)

  useEffect (()=>{
    if(selectValue === 'allPokemons'){
      getAllPokemons()
    } else {
      getPokemonsByType(selectValue)
    }
  }, [selectValue,page])

const inputSearch = useRef()  
const handleSubmit = e => {
  e.preventDefault()
  setInputValue (inputSearch.current.value.trim().toLowerCase()) /*atrapar el valor y el .trim elimina espacion inicio y final*/
}

const callbackFilter = pokemon => pokemon.name.includes(inputValue) /*para ejecutar la busqueda por caracteres (bul.. salga todo lo que contenga bul)*/

  return (
    <div className="welcome_container">
      <header className="pokedex__header">
          <Link to="/">
            <img className="pokedex__img"
              src={pokedex}
              alt=""
            />
          </Link>
      </header>
      <p className="welcome__p"><span className="welcome">Welcome {trainer}</span>, here you could find your favorite Pokemon🐱</p>
      <div className="pokedexpage__container--form">
        <form className="pokedexp__form" onSubmit={handleSubmit}>
          <input className="input__pokemon" ref={inputSearch} type="text" placeholder="Search Pokemon"  />
          <button className="btn__pokesearch">Search</button>
        </form>
        <SelectType setSelectValue= {setSelectValue}/>
      </div>
      <div className="card_container">
        {
          pokemons?.results.filter(callbackFilter).map(pokemon => (  /*primero filtra y luego mapea lo filtrado*/
          <PokemonCard
            key={pokemon.url}
            url={pokemon.url}
          />))
        }
      </div>
      <PokePages page={page} setPage={setPage} />
    </div>
  )
}

export default PokedexPage

