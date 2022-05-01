import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'
import Navbar from '../components/NavBar'
import MovieDisplay from '../components/MovieDisplay';
import Footer from '../components/Footer'
import '../styles/search.scss';

const Search = () => {
  const [results, setResults] = useState([])
  const handleSearch = (e) => {
    const query = e.target.value;
    if (query.length > 0) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=43f1f0b78ebb70caf0b2b68f60949a2b&language=en-US&query=${query}&page=1`)
        .then(res=> res.json())
        .then(data => setResults(data.results));
    }
  }

  return (
    <div className='search-container'>
      <Navbar />
      <Grid container justifyContent='center' marginTop={4}>
        <TextField
          id="search-bar"
          label="Search for your movie"
          className="search-input"
          onChange={(e) => handleSearch(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>

      <Grid container justifyContent='center' spacing={4} marginTop={4}>
        {results.map((movie) => (
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

export default Search;