import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./components/Main"
import Release from "./components/Release"
import Popular from "./components/Popular"
import Search from "./components/Search"
import ErrorNotFound from "./components/ErrorNotFound"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/release" element={<Release />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/search" element={<Search />} />
      <Route path="/*" element={<ErrorNotFound />} />
    </Routes>
  </BrowserRouter>
);
