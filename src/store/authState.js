export const blankState = {
  user: null,
  admin: null,
  cart: {},
};

const storedState = localStorage.getItem('state');
const initialState = storedState ? JSON.parse(storedState) : blankState;

export default initialState;
