import React, { useState } from 'react';
import styled from 'styled-components/macro';
import thm from '../../styling/theme';
import Greeting from './Greeting';
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AuthForm = () => {
  const [authState, setAuthState] = useState('signIn');

  return (
    <Root>
      <Greeting
        action={authState}
        changeAuthState={setAuthState}
      />
      <Form>
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
      </Form>
    </Root>
  );
};

export default AuthForm;
