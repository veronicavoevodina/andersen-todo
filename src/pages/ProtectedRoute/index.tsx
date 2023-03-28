import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAppSelector((store) => store.todo);
  if (!user) {
    return <Navigate to="/register" />;
  }
  return children;
};
export default ProtectedRoute;
