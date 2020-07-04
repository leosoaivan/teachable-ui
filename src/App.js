import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import GlobalStyle from './styling/global';
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
    <React.Fragment>
      <GlobalStyle />
      <Root>
        { auth.data ? (
          'Hello'
        ) : (
          <UnauthenticatedApp />
        )}
      </Root>
    </React.Fragment>
  );
};

export default App;
