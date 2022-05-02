import { useContext } from "react"
import Context from '../context/Context'
import useFetchPeliculas from './useFetchPeliculas'


const useTopRated = () => {
  const context = useContext(Context);

  const resultsObj = useFetchPeliculas('top_rated');

  context.setTopRated(resultsObj.peliculas)
}

export default useTopRated