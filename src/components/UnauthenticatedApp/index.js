import React, { useState } from 'react';
import Proptypes from 'prop-types';
import AuthForm from '../AuthForm';

const UnauthenticatedApp = () => {
  const [authState, setAuthState] = useState('signIn');

  return (
    <AuthForm
      authState={authState}
      setAuthState={setAuthState}
    />
  );
};

export default UnauthenticatedApp;
