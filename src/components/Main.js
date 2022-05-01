import React, { useContext } from 'react'
import Navbar from './NavBar'
import Context from '../context/Context'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'
import useNowPlaying from '../hooks/useNowPlaying'

const Main = () => {
  const context = useContext(Context);
  usePopular()
  useTopRated()
  useNowPlaying()
  return (
    <div>
      <Navbar/>
      <h1>Main</h1>
    </div>
  )
}

export default Main;