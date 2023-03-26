import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogin} from 'redux/auth/selector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(getIsLogin)
  const shouldRedirect = !isLogin;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;}