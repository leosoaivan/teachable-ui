import React, { useState } from 'react';
import styled from 'styled-components/macro';
import thm from '../../styling/theme';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Root = styled.div`
  position: absolute;
  top: 12.5%;
  width: 500px;
  padding: 48px;
  border: 1px solid ${thm.formField};
  border-radius: 4px;
  box-shadow: 0 0 4px 0 ${thm.boxShadow};

`;

const AuthForm = () => {
  const [authState, setAuthState] = useState('signIn');

  return (
    <Root>
      {
        authState === 'signIn'
          ? (
            <SignIn
              onChangeAuthState={setAuthState}
            />
          ) : (
            <SignUp
              onChangeAuthState={setAuthState}
            />
          )
      }
    </Root>
  );
};

export default AuthForm;
