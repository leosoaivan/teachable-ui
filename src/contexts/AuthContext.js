import React, { createContext, useEffect, useState } from 'react';
import Proptypes from 'prop-types';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loading: true,
    data: null,
  });

  const setAuthData = (data) => {
    setAuth({ data });
  };

  useEffect(() => {
    setAuth({
      loading: false,
      data: JSON.parse(localStorage.getItem('authData')),
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('authData', JSON.stringify(auth.data));
  }, [auth.data]);

  return (
    <AuthContext.Provider value={{ auth, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: Proptypes.node,
};

AuthProvider.defaultProps = {
  children: null,
};

export default AuthProvider;
