import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SearchPage from './pages/SearchPage';

import { GlobalStyles } from './style/globalStyle';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Success from './pages/Success';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="/products">
          <Route element={<SearchPage />} path="search" />
          <Route element={<Categories />} path=":category" />
          <Route element={<Home />} path=":id" />
        </Route>
        {/* <Route element={<SearchPage />} path="/products/search" /> */}
        <Route element={<SignIn />} path="/signin" />
        <Route element={<Register />} path="/signup" />
        <Route element={<Cart />} path="/shopcart" />
        <Route element={<Success />} path="/success" />
        {/* <Route element={<Home />} path="/products/:category" />
        <Route element={<Home />} path="/products/:id" />
        <Route element={<Home />} path="/cart" />
        <Route element={<Home />} path="/success" />
        <Route element={<Home />} path="/profile" /> */}
      </Routes>
    </>
  );
}

export default App;
