import { Route, Routes } from 'react-router-dom';
import { Login } from 'page/Login';
import { Home } from 'page/Home';
import Layout from './Layout/Layout';
import { Registration } from 'page/Registration';
import { Contact } from 'page/Contact';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operation';
import { PrivateRoute } from './PrivatRoute/PrivatRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<Contact />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<Registration />} />
          }
        />
        <Route
          path="*"
          element={<PublicRoute redirectTo="/" component={<Home />} />}
        />
      </Route>
    </Routes>
  );
}
