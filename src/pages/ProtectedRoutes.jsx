import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {

  const trainer = useSelector( reducer => reducer.trainer)

  if(trainer.length >= 3) {
    return <Outlet /> /*permite ingresar a la info de los hijos de las rutas protegidas*/
  } else {
    return <Navigate to='/' /> /*para retornar a la homepage si no cumple la condicion*/
  }

}

export default ProtectedRoutes
