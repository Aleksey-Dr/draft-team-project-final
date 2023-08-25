import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy } from 'react';

import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Header = lazy(() => import('../components/Header/Header'));
// const SideBar = lazy(() => import('../components/SideBar/SideBar'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const CalendarPage = lazy(() => import('../pages/Calendar'));

export const App = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route index element={<Header />} />
          {/* <Route index element={<SideBar />} /> */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/calendar"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/calendar"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
            }
          />
        </Route>
      </Routes>
    </HelmetProvider>
  );
};
