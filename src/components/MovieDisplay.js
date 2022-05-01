import React from 'react';
import { Link } from 'react-router-dom'
import RemoveRedEyeOutlined from '@mui/icons-material/RemoveRedEyeOutlined'
import useImageUrl from '../hooks/useImageUrl';
import '../styles/movie-display.scss';

const MovieDisplay = ({ id, image, title }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className='movie-display-container'>
        <img src={useImageUrl(image)} />
        <div className='title'><a>{title}</a></div>
        <div className='preview'><RemoveRedEyeOutlined /></div>
      </div>
    </Link>
  )
}

export default MovieDisplay;