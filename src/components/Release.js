import React, {useContext} from 'react'
import Grid from '@mui/material/Grid';
import Navbar from '../components/NavBar';
import Context from '../context/Context'
import MovieDisplay from '../components/MovieDisplay';

import useNowPlaying from '../hooks/useNowPlaying'


const Release = () => {
  useNowPlaying()
  const context = useContext(Context);
  const nowPlaying = context?.nowPlaying;
  return (
    <div>
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
      {/* <MovieDisplay id={firstMovie.id} image={firstMovie.poster_path} title={firstMovie.title} /> */}
    </div>
  )
}

export default Release;