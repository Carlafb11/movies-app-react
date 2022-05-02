import { useContext } from "react"
import Context from '../context/Context'
import useFetchPeliculas from './useFetchPeliculas'


const useNowPlaying = (page) => {
  const context = useContext(Context);

  const resultsObj = useFetchPeliculas('now_playing', page);

  context.setNowPlaying(resultsObj.peliculas)
  context.setNowPlayingTotalPages(resultsObj.totalPages)
}

export default useNowPlaying