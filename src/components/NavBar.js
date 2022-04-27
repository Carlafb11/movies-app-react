import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./Main"
import Release from "./Release"
import Popular from "./Popular"
import Search from "./Search"

const NavBar = () => {

  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>Main</li>
            <li>Release</li>
            <li>Popular</li>
            <li>Search</li>
          </ul>
        </nav>
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