import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../apollo/product.querys';
import Announcement from '../components/Announcement';
import CategoryBar from '../components/CategoryBar';
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
import ProductList from '../components/Products/ProductList';
import { FilterProductCategory } from '../utils/utils';

export default function Categories() {
  const { data } = useQuery(getAllProducts);
  const [productArray, setProductArray] = useState([]);
  const params = useParams();
  const { category } = params;

  useEffect(() => {
    if (data) {
      setProductArray(FilterProductCategory(data.products, category));
    }
  }, [data, category]);

  return (
    <>
      <Announcement />
      <NavBar />
      <CategoryBar />
      <ProductList productArray={productArray} />
      <Footer />
    </>
  );
}
