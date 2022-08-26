import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import Add from './components/Add';
import AddNew from './components/AddNew';
import Shop from './components/Shop';
import ShopsList from './components/ShopsList';
import ShopsListAdv from './components/ShopsListAdv';
import AdvancedSearch from './components/AdvancedSearch';
import UpdateShop from './components/UpdateShop';
import NotFound from './components/NotFound';
import Error from './components/Error';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './components/SignIn';

import withContext from './Context';

const HeaderWithContext = withContext(Header);
const HomeWithContext = withContext(Home);
const SearchWithContext = withContext(Search);
const AddWithContext = withContext(Add);
const AddNewWithContext = withContext(AddNew);
const ShopWithContext = withContext(Shop);
const ShopsListWithContext = withContext(ShopsList);
const ShopsListAdvWithContext = withContext(ShopsListAdv);
const AdvancedSearchWithContext = withContext(AdvancedSearch);
const UpdateShopWithContext = withContext(UpdateShop);
const PrivateRouteWithContext = withContext(PrivateRoute);
const SigninWithContext = withContext(SignIn);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderWithContext />
        <Routes>
          <Route element={<PrivateRouteWithContext />}>
            <Route path="/" element={<HomeWithContext />} />
            <Route path="/add" element={<AddNewWithContext />} />
            <Route path="/shop/:id" element={<ShopWithContext />} />
            <Route path="/search" element={<SearchWithContext />} />
            <Route path="/advanced-search" element={<AdvancedSearchWithContext />} />
            <Route path="/advsearch" element={<ShopsListAdvWithContext />} />
            <Route path="/update/:id" element={<UpdateShopWithContext />} />
          </Route>
          <Route path="/signin" element={<SigninWithContext />} /> 
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
