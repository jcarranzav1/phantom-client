import { Navigate } from 'react-router';
import { useSelector } from '../store/authStore';

export const AdminPrivate = ({ children }) => {
  const client = useSelector((state) => state.user);
  const { isAdmin = undefined } = !!client && client;
  return !client ? <Navigate to="/admin/signin" /> : isAdmin ? children : <Navigate to="/" />;
};
