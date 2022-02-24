import { Navigate } from 'react-router';
import { useSelector } from '../store/authStore';

export const AdminPrivate = ({ children }) => {
  const client = useSelector((state) => state.user);
  const { isAdmin } = !!client && client;
  return !client ? <Navigate to="/signin" /> : isAdmin ? children : <Navigate to="/" />;
};
