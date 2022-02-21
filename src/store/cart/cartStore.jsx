import { createContext, useContext, useMemo, useReducer } from 'react';
import { cartTypes } from '../../types/types';
import cartReducer from './cartReducer';
import cartInitialState from './cartState';

const Cart = createContext({});

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const increase = (payload) => {
    dispatch({ type: cartTypes.increase, payload });
  };

  const decrease = (payload) => {
    dispatch({ type: cartTypes.decrease, payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: cartTypes.addItem, payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: cartTypes.removeItem, payload });
  };

  const clearCart = () => {
    dispatch({ type: cartTypes.clear });
  };

  const value = useMemo(
    () => ({
      state,
      increase,
      decrease,
      addProduct,
      removeProduct,
      clearCart,
    }),
    [state],
  );
  return <Cart.Provider value={value}>{children}</Cart.Provider>;
}
/* 
export function useCartDispatch() {
  const { dispatch } = useContext(Cart);
  return dispatch;
} */

export function useCartSelector(callback) {
  const { state } = useContext(Cart);
  return callback(state);
}
export default Cart;

export function useCartActions() {
  const { increase, decrease, addProduct, removeProduct, clearCart } = useContext(Cart);
  return { increase, decrease, addProduct, removeProduct, clearCart };
}
