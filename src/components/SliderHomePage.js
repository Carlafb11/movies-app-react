import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage-styles.scss'

const SliderHomePage = ({ movies }) => {
  return (
    <div>
      <Carousel className="slider-style">
        {movies.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default SliderHomePage;