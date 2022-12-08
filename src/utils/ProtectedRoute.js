import { Navigate } from 'react-router-dom';
import { useGlobalAuthContext } from 'context/auth/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useGlobalAuthContext();

  return user ? <Navigate to='/' /> : children;
};

export default ProtectedRoute;
