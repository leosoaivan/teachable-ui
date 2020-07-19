import React, { useState } from 'react';
import styled from 'styled-components/macro';
import thm from '../../styling/theme';
import AuthForm from '../AuthForm';
import Greeting from './Greeting';

const Root = styled.div`
  position: absolute;
  top: 12.5%;
  width: 500px;
  padding: 48px;
  border: 1px solid ${thm.formField};
  border-radius: 4px;
  box-shadow: 0 0 4px 0 ${thm.boxShadow};
`;

const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const UnauthenticatedApp = () => {
  const [authState, setAuthState] = useState('signIn');

  return (
    <Root>
      <Greeting
        action={authState}
        changeAuthState={setAuthState}
      />
      <FormRoot>
        <AuthForm
          authState={authState}
        />
      </FormRoot>
    </Root>
  );
};

export default UnauthenticatedApp;
