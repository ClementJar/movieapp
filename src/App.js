import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import PopularMovies from "./views/PopularMovies";
import LikedMovies from "./views/LikedMovies";

function App() {
  return (
      <>
          <Nav/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PopularMovies />}/>
              <Route path="home" element={<PopularMovies />}/>
              <Route path="liked" element={<LikedMovies />}/>
            </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
