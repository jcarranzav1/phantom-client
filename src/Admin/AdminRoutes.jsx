import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import NotFound from '../pages/NotFound';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<UserList />} path="users" />
      <Route element={<User />} path="user/:userId" />
      <Route element={<NewUser />} path="newUser" />
      <Route element={<ProductList />} path="products" />
      <Route element={<Product />} path="product/:productId" />
      <Route element={<NewProduct />} path="newproduct" />
      <Route element={<NotFound admin />} path="*" />
    </Routes>
  );
}
