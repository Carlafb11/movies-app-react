import { useState, useEffect } from "react"


const useFetchPeliculas = (tipo) => {
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${tipo}?api_key=07b7fbf0aa198d742f7f3020308675d2&language=es`)
    .then(res=> res.json())
    .then(data => setPeliculas(data.results))
  }, [])
  
  return peliculas
}

export default useFetchPeliculas