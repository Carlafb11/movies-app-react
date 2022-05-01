import React, { useState, useEffect } from 'react'
import Navbar from './NavBar'
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import VideoIcon from '@mui/icons-material/SlowMotionVideo'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import useImageUrl from '../hooks/useImageUrl'
import '../styles/movie-page.scss';

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState({})
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=07b7fbf0aa198d742f7f3020308675d2`)
      .then(res=> res.json())
      .then(data => setMovie(data))
  }, [])

  return (
    <div
      className="movie-page-container"
      style={{ backgroundImage: `url(${useImageUrl(movie.backdrop_path)})` }}
    >
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img className="movie-poster" src={useImageUrl(movie.poster_path)} />
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid container justifyContent="space-between">
                <h2>{movie.title}<span> {movie.release_date?.slice(0, 4)}</span></h2> 
                <Button onClick={handleOpen} variant="text" startIcon={<VideoIcon />}>
                  Watch trailer
                </Button>
              </Grid>
              <h4>General</h4>
              <p>{movie.overview}</p>
              <h4>Generos</h4>
              <ol>
                {movie.genres?.map((genre) => <li>{genre.name}</li>)}
              </ol>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container>
          <iframe width="420" height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY" />
        </Grid>
      </Modal>
    </div>
  )
}

export default MoviePage;