import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from './contexts/AuthContext';
import UnauthenticatedApp from './components/UnauthenticatedApp';

const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const App = () => {
  const { auth, loading } = useContext(AuthContext);

  if (loading) {
    // console.log('LOADING');

    return (
      'LOADING'
    );
  }

  return (
    <Root>
      { auth.data ? (
        'Hello'
      ) : (
        <UnauthenticatedApp />
      )}
    </Root>
  );
};

export default App;
