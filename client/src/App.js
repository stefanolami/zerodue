import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Shop from './components/Shop';
import AdvancedSearch from './components/AdvancedSearch'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/advsearch" element={<AdvancedSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
