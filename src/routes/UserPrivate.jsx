import { Navigate } from 'react-router';
import jwtDecode from 'jwt-decode';
import { clearSession, getSession } from '../session/session';
import { useDispatch } from '../store/authStore';
import { types } from '../types/types';

export const UserPrivate = ({ children }) => {
  const token = getSession();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  if (token) {
    const { exp } = jwtDecode(token);
    const expirationTime = exp * 1000 - 10000;
    if (Date.now() >= expirationTime) {
      clearSession();
    }
  }

  if (!token) dispatch({ type: types.userSignout });
  return token ? children : <Navigate to="/signin" />;
};
