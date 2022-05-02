import React, {useContext, useState} from 'react'
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Navbar from '../components/NavBar';
import Context from '../context/Context'
import MovieDisplay from '../components/MovieDisplay';
import Footer from '../components/Footer'

import getMovies from '../utils/getMovies'

import '../styles/release.scss';


const Release = () => {
  const [currentPage, setCurrentPage] = useState(1);

  if (currentPage === 1) {
    getMovies('now_playing', currentPage).then((res) => {
      context.setNowPlaying(res.results)
      context.setNowPlayingTotalPages(res.total_pages)
    });
  }
  
  const context = useContext(Context);
  const nowPlaying = context?.nowPlaying;

  const handlePagination = (page) => {
    setCurrentPage(page);
    getMovies('now_playing', page).then((res) => {
      context.setNowPlaying(res.results)
      context.setNowPlayingTotalPages(res.total_pages)
    });
  }

  return (
    <div className="release-container">
      <Navbar />
      <Grid container justifyContent='center' spacing={4} marginTop={4}>
        {nowPlaying.map((movie) => (
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
        className="release-pagination"
        count={context.nowPlayingTotalPages}
        page={currentPage}
        onChange={(e, page) => handlePagination(page)}
        variant="outlined"
        color="primary" />
      <Footer />
    </div>
  )
}

export default Release;