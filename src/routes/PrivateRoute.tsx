import React, { FC } from 'react';
// import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
// import { isAuthenticatedSelector } from 'containers/LoginPage/store/selectors';

const PrivateRoute: FC<any> = ({ children }) => {
  // const isAuthenticated = useSelector(isAuthenticatedSelector());
  const location = useLocation();

  // if (!isAuthenticated) {
  // eslint-disable-next-line
  if (!false) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
