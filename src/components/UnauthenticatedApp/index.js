import React, { useState } from 'react';
import Proptypes from 'prop-types';
import Login from '../Login';

const UnauthenticatedApp = () => {
  const [authState, setAuthState] = useState('logIn');

  if (authState === 'signUp') {
    return null;
  }

  return (
    <Login />
  );
};

export default UnauthenticatedApp;
