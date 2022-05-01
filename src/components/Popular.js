import React, {useContext} from 'react'
import Grid from '@mui/material/Grid';
import Navbar from '../components/NavBar';
import Context from '../context/Context'
import MovieDisplay from '../components/MovieDisplay';
import Footer from '../components/Footer'

import usePopular from '../hooks/usePopular'


const Popular = () => {
  usePopular();
  const context = useContext(Context);
  const popular = context?.popular;
  return (
    <div>
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
      <Footer />
    </div>
  )
}

export default Popular;