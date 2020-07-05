import React, { useState } from 'react';
import styled from 'styled-components/macro';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Root = styled.div`
  width: 500px;
  padding: 24px;
`;

const AuthForm = () => {
  const [authState, setAuthState] = useState('signIn');

  return (
    <Root>
      {
        authState === 'signIn'
          ? (
            <SignIn
              onActionClick={setAuthState}
            />
          ) : (
            <SignUp
              onActionClick={setAuthState}
            />
          )
      }
    </Root>
  );
};

export default AuthForm;
