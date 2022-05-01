import { useContext } from "react"
import Context from '../context/Context'
import useFetchPeliculas from './useFetchPeliculas'


const useNewMovies = () => {
  const context = useContext(Context);

  const results = useFetchPeliculas('latest');

  context.setNewMovies(results)
}

export default useNewMovies