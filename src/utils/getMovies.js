const getMovies = (type, page) => {
  return fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=07b7fbf0aa198d742f7f3020308675d2&page=${page}`)
    .then(res=> res.json())
    .then(data => data);
}

export default getMovies;