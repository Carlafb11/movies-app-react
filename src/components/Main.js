import React, { useContext } from 'react'
import Navbar from './NavBar'
import Context from '../context/Context'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'
import useNowPlaying from '../hooks/useNowPlaying'
import SliderHomePage from './SliderHomePage'

const Main = () => {
  const context = useContext(Context);
  usePopular()
  useTopRated()
  useNowPlaying()
  return (
    <div>
      <Navbar/>
      <SliderHomePage />
    </div>
  )
}

export default Main;