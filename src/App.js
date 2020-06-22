import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import UnauthenticatedApp from './components/UnauthenticatedApp';
// import Login from './components/Login';

const App = () => {
  const { auth, loading } = useContext(AuthContext);

  if (loading) {
    // console.log('LOADING');

    return (
      'LOADING'
    );
  }

  return (
    <div>
      { auth.data ? (
        'Hello'
      ) : (
        <UnauthenticatedApp />
      )}
    </div>
  );
};

export default App;
