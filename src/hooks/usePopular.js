import { useContext } from "react"
import Context from '../context/Context'
import useFetchPeliculas from './useFetchPeliculas'


const usePopular = () => {
  const context = useContext(Context);

  const results = useFetchPeliculas('popular');

  context.setPopular(results)
}

export default usePopular