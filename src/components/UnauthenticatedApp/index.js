import React, { useState } from 'react';
import Proptypes from 'prop-types';
import AuthForm from '../AuthForm';

const UnauthenticatedApp = () => {
  const [authState, setAuthState] = useState('logIn');

  if (authState === 'signUp') {
    return null;
  }

  return (
    <AuthForm />
  );
};

export default UnauthenticatedApp;
