import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Login from './components/Login';

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      { auth.data ? (
        'Hello'
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
