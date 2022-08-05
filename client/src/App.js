import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Shop from './components/Shop';
import AdvancedSearch from './components/AdvancedSearch';
import NotFound from './components/NotFound';
import Error from './components/Error';

import withContext from './Context';

const AddWithContext = withContext(Add);
const ShopWithContext = withContext(Shop);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddWithContext />} />
          <Route path="/shop/:id" element={<ShopWithContext />} />
          <Route path="/advsearch" element={<AdvancedSearch />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
