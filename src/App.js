import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Login from './components/Login';

const App = () => {
  const { auth, loading } = useContext(AuthContext);

  if (loading) {
    console.log('LOADING');

    return (
      'LOADING'
    );
  }

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
