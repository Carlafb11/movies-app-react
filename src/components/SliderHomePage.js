import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage-styles.scss'

const SliderHomePage = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {movies.map((item, index) => (
          <Carousel.Item className="slider-style" key={index}>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.overview}</p>
              <Link to={`/movie/${item.id}`}>
                <Button variant='contained'>Learn more</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default SliderHomePage;