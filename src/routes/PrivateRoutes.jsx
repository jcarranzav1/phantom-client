import { Navigate } from 'react-router';
import { useSelector } from '../store/authStore';

export const PrivateRoute = ({ children }) => {
  const client = useSelector((state) => state.user);

  return client ? children : <Navigate to="/signin" />;
};
