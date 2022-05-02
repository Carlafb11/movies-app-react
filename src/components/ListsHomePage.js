import '../styles/homepage-styles.scss'

const ListsHomePage = () => {

  return (
    <div className="lists-homepage-container">

      <div className="lists-homepage">
        <div className="list-title">
          <h4>Top movies</h4>
        </div>
        <div className="list-body-item">
          <div className="movie-item">
            <img src="https://image.tmdb.org/t/p/original/tj4lzGgHrfjnjVqAKkLIjFqPSyO.jpg" alt="Avatar"/>
            <p>Pelicula</p>
          </div>
          <p>Ver peli</p>
        </div>
        <div className="list-body-item">
          <div className="movie-item">
            <img src="https://image.tmdb.org/t/p/original/tj4lzGgHrfjnjVqAKkLIjFqPSyO.jpg" alt="Avatar"/>
            <p>Pelicula</p>
          </div>
          <p>Ver peli</p>
        </div>
      </div>

      <div className="lists-homepage">
        <div className="list-title">
          <h4>Best rated movies</h4>
        </div>
        <div className="list-body-item">
          <div className="movie-item">
            <img src="https://image.tmdb.org/t/p/original/tj4lzGgHrfjnjVqAKkLIjFqPSyO.jpg" alt="Avatar"/>
            <p>Pelicula</p>
          </div>
          <p>Ver peli</p>
        </div>
        <div className="list-body-item">
          <div className="movie-item">
            <img src="https://image.tmdb.org/t/p/original/tj4lzGgHrfjnjVqAKkLIjFqPSyO.jpg" alt="Avatar"/>
            <p>Pelicula</p>
          </div>
          <p>Ver peli</p>
        </div>

      </div>

    </div>
  )
}

export default ListsHomePage;