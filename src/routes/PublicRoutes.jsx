import { Navigate } from 'react-router';
import { useSelector } from '../store/authStore';

export const PublicRoute = ({ children }) => {
  const client = useSelector((state) => state.user);

  return client ? <Navigate to="/home" /> : children;
};
