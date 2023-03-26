import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogin } from 'redux/auth/selector';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(getIsLogin);

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
