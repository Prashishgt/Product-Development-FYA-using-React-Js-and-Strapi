import React from 'react';
import { useAuth } from '../component/Login/Login';
import NotLoggedIn from '../component/NotLoggedIn';
import { Feed } from './broadcast';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Feed /> : <NotLoggedIn />;
};

export default PrivateRoute;
