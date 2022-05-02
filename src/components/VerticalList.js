import { Link } from 'react-router-dom'

const VerticalList = ({ title, movies }) => (
  <div className="lists-homepage">
    <div className="list-title">
      <h4>{title}</h4>
    </div>
    {movies.map((item, index) => (
      <div className="list-body-item" key={index}>
        <div className="movie-item">
          <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="Avatar"/>
          <p>{item.title}</p>
        </div>
        <Link to={`/movie/${item.id}`}>
          <a>Watch Movie</a>
        </Link>
      </div>
    ))}
  </div>
);

export default VerticalList;