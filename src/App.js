import { useState } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from "./components/Main"
import Release from "./components/Release"
import Popular from "./components/Popular"
import Search from "./components/Search"
import MoviePage from "./components/MoviePage"
import ErrorNotFound from "./components/ErrorNotFound"
import Context from "./context/Context"

function App() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [nowPlayingTotalPages, setNowPlayingTotalPages] = useState(0);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const context = {
    nowPlaying,
    setNowPlaying,
    nowPlayingTotalPages,
    setNowPlayingTotalPages,
    popular,
    setPopular,
    topRated,
    setTopRated
  }
  
  return (
    <Context.Provider value={context}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/release" element={<Release />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
            <Route path="/*" element={<ErrorNotFound />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
  );
}

export default App;
