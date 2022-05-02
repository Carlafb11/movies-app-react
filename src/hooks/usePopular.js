import { useContext } from "react"
import Context from '../context/Context'
import useFetchPeliculas from './useFetchPeliculas'


const usePopular = () => {
  const context = useContext(Context);

  const resultsObj = useFetchPeliculas('popular');

  context.setPopular(resultsObj.peliculas)
}

export default usePopular