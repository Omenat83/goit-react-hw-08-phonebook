import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'Redux/Auth/operations';
import { useAuth } from 'Redux/Auth/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { NotFound } from 'pages/NotFound/NotFound';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('../pages/Contacts/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'loading....'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
