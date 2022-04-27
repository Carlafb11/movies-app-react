import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./components/Main"
import Release from "./components/Release"
import Popular from "./components/Popular"
import Search from "./components/Search"

const NavBar = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/release" element={<Release />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default NavBar;