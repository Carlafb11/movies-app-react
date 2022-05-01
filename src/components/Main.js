import React, { useContext } from 'react'
import Navbar from './NavBar'
import Context from '../context/Context'
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated'
import useNowPlaying from '../hooks/useNowPlaying'
import SliderHomePage from './SliderHomePage'
import ListsHomePage from './ListsHomePage'
import Footer from './Footer'

const Main = () => {
  const context = useContext(Context);
  usePopular()
  useTopRated()
  useNowPlaying()
  return (
    <div>
      <Navbar/>
      <SliderHomePage />
      <ListsHomePage />
      <Footer />
    </div>
  )
}

export default Main;