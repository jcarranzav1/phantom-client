import { sumItems } from './cartReducer';

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const cartInitialState = {
  cartItems: storage,
  ...sumItems(storage),
};

export default cartInitialState;
