import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router-dom"
import '../components/PokedexPage/styles/HomePage.css'
import pokedex from '../assets/images/pokedex.png'
import footer__home from '../assets/images/footer__home.png'

const HomePage = () => {

  const trainer = useSelector(reducer => reducer.trainer)
  const inputTrainer = useRef () /*para retornar el input*/
  const dispatch= useDispatch ()
  const navigate = useNavigate () /*crea un elemento para navegar entre las rutas*/

  const handleSubmit = e => {
    e.preventDefault()
    dispatch (setTrainerG(inputTrainer.current.value.trim()))
    navigate ('/pokedex')
  }

  return (
    <div className="home_container">
      <div className="img__container">
        <img className="home__img" src={pokedex} alt="POKEDEX" />
      </div>
      <section className="home__greeting">
        <h2 className="greeting">¡ Hi Trainer !🙋‍♂️</h2>
        <p>Please, enter your name to get start</p>
        <form onSubmit={handleSubmit}>
          <input className="inp__start" ref={inputTrainer} type="text" placeholder="Type your name" required/>
          <button className="bts__start">Gotta catch 'em all!🤾‍♂️</button>
        </form>
      </section>
      <footer className="home__footer">
      <img className="footer__img" src={footer__home} alt="" />
      </footer>
    </div>
  )
}

export default HomePage
