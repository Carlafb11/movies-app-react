import { useState, useEffect } from "react"


const useFetchPeliculas = (tipo, page) => {
  const [peliculas, setPeliculas] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${tipo}?api_key=07b7fbf0aa198d742f7f3020308675d2&page=${page}`)
      .then(res=> res.json())
      .then(data => {
        setPeliculas(data.results)
        setTotalPages(data.total_pages)
      })
  }, [])
  
  return { peliculas, totalPages }
}

export default useFetchPeliculas