import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/home.js";
import Chopify from "./Pages/chopify.js";
import History from "./Pages/history.js";
import Favorites from "./Pages/favorites.js";

function App() {
  return (
    
    <div className="App" id="outer-container">
      
    <head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      />
    </head>
      <BrowserRouter>
      <Header />
        <Sidebar />
        <div id="pages" style={{width: '100%'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chopify" element={<Chopify/>} />
          <Route path="/history" element={<History />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        </div>
      </BrowserRouter>
      <div id = "page-wrap">
      </div>
    </div>
  );
}

export default App;
