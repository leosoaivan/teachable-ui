import React from 'react';
import styled from 'styled-components/macro';
import SignIn from './SignIn';

const Root = styled.div`
  width: 500px;
  padding: 24px;
`;

const AuthForm = () => {
  return (
    <Root>
      <SignIn />
    </Root>
  );
};

export default AuthForm;
