import { cartTypes } from '../../types/types';

const Storage = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
};

export const sumItems = (cartItems) => {
  Storage(cartItems);

  const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
  const total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemCount, total };
};

function cartReducer(state = {}, action) {
  switch (action.type) {
  case cartTypes.addItem:
    if (!state.cartItems.find((item) => item.id === action.payload.id)) {
      state.cartItems.push({
        ...action.payload,
        quantity: 1,
      });
    } else {
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity += 1;
    }

    return {
      ...state,
      ...sumItems(state.cartItems),
      cartItems: [...state.cartItems],
    };

  case cartTypes.removeItem:
    return {
      ...state,
      ...sumItems(state.cartItems.filter((item) => item.id !== action.payload.id)),
      cartItems: [...state.cartItems.filter((item) => item.id !== action.payload.id)],
    };
  case cartTypes.increase:
    state.cartItems[
      state.cartItems.findIndex((item) => item.id === action.payload.id)
    ].quantity += 1;

    return {
      ...state,
      ...sumItems(state.cartItems),
      cartItems: [...state.cartItems],
    };
  case cartTypes.decrease:
    state.cartItems[
      state.cartItems.findIndex((item) => item.id === action.payload.id)
    ].quantity -= 1;
    return {
      ...state,
      ...sumItems(state.cartItems),
      cartItems: [...state.cartItems],
    };

  case cartTypes.clear:
    return {
      cartItems: [],
      ...sumItems([]),
    };

  default:
    return state;
  }
}
export default cartReducer;
