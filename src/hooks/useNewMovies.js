import { useContext } from "react"
import Context from '../context/Context'
import useFetchPeliculas from './useFetchPeliculas'


const useNewMovies = () => {
  const context = useContext(Context);

  const resultsObj = useFetchPeliculas('latest');

  context.setNewMovies(resultsObj.peliculas)
}

export default useNewMovies