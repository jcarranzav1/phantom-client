import Announcement from '../components/Announcement';
import CategoryBar from '../components/CategoryBar';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
import ProductList from '../components/Products/ProductList';
import { productsArray } from '../data/productsData';

export default function Categories() {
  return (
    <>
      <Announcement />
      <NavBar />
      <CategoryBar />
      <ProductList productArray={productsArray} />
      <Footer />
    </>
  );
}
