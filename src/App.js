import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import PopularMovies from "./views/PopularMovies";
import LikedMovies from "./views/LikedMovies";
import Home from "./views/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="" element={<Navigate to={"/home"} replace/>}/>
                    <Route path="home" element={<PopularMovies/>}/>
                    <Route path="liked" element={<LikedMovies/>}/>
                </Route>
                <Route path="*" element={<Navigate to={"/home"} replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
