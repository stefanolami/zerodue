import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home.js';
import Aggiungi from './components/Aggiungi';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aggiungi" element={<Aggiungi />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
