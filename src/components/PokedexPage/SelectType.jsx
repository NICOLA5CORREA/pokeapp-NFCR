import { useEffect } from "react"
import useFetch from "../../Hooks/useFetch"
import './styles/SelectType.css'

const SelectType = ({ setSelectValue }) => {

  const url = 'https://pokeapi.co/api/v2/type'
  const [ types, getAllTypes ] = useFetch(url)

  useEffect(() => {
    getAllTypes()
  }, [])
  
  const handleChange = e => {
    setSelectValue (e.target.value)
  }

  return (
    <div className= "select__wrap">
      <select className="select__type" onChange={handleChange}>
        <option value="allPokemons">All Pokemons</option>
        {
          types?.results.map(type => (
            <option className="options__type" key={type.url} value={type.url}>{type.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectType
