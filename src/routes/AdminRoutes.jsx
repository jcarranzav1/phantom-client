import { Route, Routes } from 'react-router-dom';
import Admin from '../pages/admin/Admin';
import NewAdmin from '../pages/admin/NewAdmin';
import NewProduct from '../pages/admin/NewProduct';
import Products from '../pages/admin/Products';
import Profile from '../pages/admin/Profile';
import UpdateProfile from '../pages/admin/UpdateProfile';
import NotFound from '../pages/NotFound';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<Admin />} path="/dashboard" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<UpdateProfile />} path="/updateProfile" />
      <Route element={<NewProduct />} path="/newProduct" />
      <Route element={<Products />} path="/products" />
      <Route element={<NewAdmin />} path="/newAdmin" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}
