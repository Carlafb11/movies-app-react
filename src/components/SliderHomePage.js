import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homepage-styles.scss'

const SliderHomePage = () => {
  return (
    <div>
      <Carousel className="slider-style">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/original/tj4lzGgHrfjnjVqAKkLIjFqPSyO.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/original/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/original/fEe5fe82qHzjO4yej0o79etqsWV.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default SliderHomePage;