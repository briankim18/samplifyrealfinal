import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/home.js";
import History from "./Pages/history.js";
import Favorites from "./Pages/favorites.js";

function App() {
  return (
    <div className="App" id="outer-container">
      <BrowserRouter>
      <Header />
        <Sidebar />
        <div id="pages">
        <Routes>
          <Route path="/" element={<Home />} />
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




