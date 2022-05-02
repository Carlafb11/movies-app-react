import React, {useContext, useState} from 'react'
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Navbar from '../components/NavBar';
import Context from '../context/Context'
import MovieDisplay from '../components/MovieDisplay';
import Footer from '../components/Footer'
import getMovies from '../utils/getMovies'

import '../styles/popular.scss'


const Popular = () => {
  const [currentPage, setCurrentPage] = useState(1);

  if (currentPage === 1) {
    getMovies('popular', currentPage).then((res) => {
      context.setPopular(res.results)
      context.setPopularTotalPages(res.total_pages)
    });
  }

  const context = useContext(Context);
  const popular = context?.popular;

  const handlePagination = (page) => {
    setCurrentPage(page);
    getMovies('popular', page).then((res) => {
      context.setPopular(res.results)
      context.setPopularTotalPages(res.total_pages)
    });
  }

  return (
    <div className="popular-container">
      <Navbar />
      <Grid container justifyContent='center' spacing={4} marginTop={4}>
        {popular.map((movie) => (
          <Grid item>
            <MovieDisplay
              id={movie.id}
              image={movie.poster_path}
              title={movie.title}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        className="popular-pagination"
        count={context.popularTotalPages}
        page={currentPage}
        onChange={(e, page) => handlePagination(page)}
        variant="outlined"
        color="primary" />
      <Footer />
    </div>
  )
}

export default Popular;