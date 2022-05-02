import React, {useContext, useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Navbar from '../components/NavBar';
import Context from '../context/Context'
import MovieDisplay from '../components/MovieDisplay';
import Footer from '../components/Footer'

import useNowPlaying from '../hooks/useNowPlaying'

import '../styles/release.scss';


const Release = () => {
  const [currentPage, setCurrentPage] = useState(1);
  useNowPlaying(currentPage);

  useEffect(() => {
    alert('hola')
  }, [currentPage])
  
  const context = useContext(Context);
  const nowPlaying = context?.nowPlaying;

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
        onChange={(e, page) => {
          setCurrentPage(page);
        }}
        variant="outlined"
        color="primary" />
      <Footer />
    </div>
  )
}

export default Release;