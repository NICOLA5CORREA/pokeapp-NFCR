import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import './styles/PokemonCard.css'

const PokemonCard = ({ url }) => {
  const [pokemon, getPokemon] =
    useFetch(
      url
    ); /*recibir (PokedexPage.jsx) peticion asincronica para llamar el Hook useFetch*/

  useEffect(() => {
    getPokemon();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };



  return (
    <article className={`pokecard ${pokemon?.types[0].type.name}-border ${pokemon?.types[0].type.name}${pokemon?.types[1]? (`${pokemon?.types[1].type.name}-border`):'-border'}`} onClick={handleClick}>
      <header className={`pokecard__header ${pokemon?.types[0].type.name}-gradient`}>
        <img
          className= "pokecard__image"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section className="pokecard__body">
        <h3 className={`pokecard__name ${pokemon?.types[0].type.name}${pokemon?.types[1]? (`${pokemon?.types[1].type.name}-color`):'-color'}`}>{pokemon?.name}</h3>
        <ul className="pokecard__types">
          {pokemon?.types.map((typeInfo) => (
            <li className="pokecard__typename" key={typeInfo.type.url}>{typeInfo.type.name}</li>
          ))}
        </ul>

        <hr className="pokecard__hr" />
        <ul className="pokecard__stats">
          {pokemon?.stats.map((statsInfo) => (
            <li className="pokecard__stat" key={statsInfo.stat.url}>
              <h3 className="pokecard__stat__name">{statsInfo.stat.name}</h3>
              <span className={`pokecard__stat__value ${pokemon?.types[0].type.name}-color ${pokemon?.types[1]? (`${pokemon?.types[1].type.name}-color`): ''}`}>{statsInfo.base_stat}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokemonCard;
