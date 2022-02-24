import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './routes/PublicRoutes';
import { UserPrivate } from './routes/UserPrivate';
import Register from './pages/Register';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SearchPage from './pages/SearchPage';
import { GlobalStyles } from './style/globalStyle';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import UpdateProfile from './pages/UpdateProfile';
import { AdminPrivate } from './routes/AdminPrivate';
import AdminRoutes from './routes/AdminRoutes';

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
        <Route
          element={(
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          )}
          path="/signin"
        />
        <Route
          element={(
            <PublicRoute>
              <Register />
            </PublicRoute>
          )}
          path="/signup"
        />
        <Route element={<Cart />} path="/shopcart" />
        <Route
          element={(
            <UserPrivate>
              <Profile />
            </UserPrivate>
          )}
          path="/profile"
        />
        <Route
          element={(
            <UserPrivate>
              <UpdateProfile />
            </UserPrivate>
          )}
          path="/updateProfile"
        />
        <Route
          element={(
            <UserPrivate>
              <Success />
            </UserPrivate>
          )}
          path="/success"
        />
        <Route
          element={(
            <AdminPrivate>
              <AdminRoutes />
            </AdminPrivate>
          )}
          path="/admin/*"
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}

export default App;
