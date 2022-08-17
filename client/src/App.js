import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Shop from './components/Shop';
import ShopsList from './components/ShopsList';
import ShopsListAdv from './components/ShopsListAdv';
import AdvancedSearch from './components/AdvancedSearch';
import UpdateShop from './components/UpdateShop';
import NotFound from './components/NotFound';
import Error from './components/Error';
import PrivateRoute from './components/PrivateRoute';

import withContext from './Context';

const HomeWithContext = withContext(Home);
const AddWithContext = withContext(Add);
const ShopWithContext = withContext(Shop);
const ShopsListWithContext = withContext(ShopsList);
const ShopsListAdvWithContext = withContext(ShopsListAdv);
const AdvancedSearchWithContext = withContext(AdvancedSearch);
const UpdateShopWithContext = withContext(UpdateShop);
const PrivateRouteWithContext = withContext(PrivateRoute)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeWithContext />} />
          <Route path="/add" element={<AddWithContext />} />
          <Route path="/shop/:id" element={<ShopWithContext />} />
          <Route path="/search" element={<ShopsListWithContext />} />
          <Route path="/advsearchform" element={<AdvancedSearchWithContext />} />
          <Route path="/advsearch" element={<ShopsListAdvWithContext />} />
          <Route path="/update/:id" element={<UpdateShopWithContext />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
