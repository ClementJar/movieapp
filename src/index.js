import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Home from "./routes/home";
import Liked from "./routes/liked";


const root = ReactDOM.createRoot(
    document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="home" element={<Home/>}/>
                <Route path="liked" element={<Liked/>}/>
                <Route
                    path="*"
                    element={
                    <Navigate to="/" replace />
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
