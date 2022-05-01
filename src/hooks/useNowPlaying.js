import { useContext } from "react"
import Context from '../context/Context'
import useFetchPeliculas from './useFetchPeliculas'


const useNowPlaying = () => {
  const context = useContext(Context);

  const results = useFetchPeliculas('now_playing');

  context.setNowPlaying(results)
}

export default useNowPlaying