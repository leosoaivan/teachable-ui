import React from 'react';
import styled from 'styled-components/macro';
import Login from './Login';

const Root = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
`;

const AuthForm = () => {
  return (
    <Root>
      <Login />
    </Root>
  );
};

export default AuthForm;
