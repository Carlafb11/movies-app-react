import React from 'react'
import ListsHomePage from './ListsHomePage'
import Navbar from './NavBar'
import SliderHomePage from './SliderHomePage'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <SliderHomePage />
      <ListsHomePage />
    </div>
  )
}

export default Main;