import { useContext } from "react"
import Context from '../context/Context'
import useFetchPeliculas from './useFetchPeliculas'


const useTopRated = () => {
  const context = useContext(Context);

  const results = useFetchPeliculas('top_rated');

  context.setTopRated(results)
}

export default useTopRated