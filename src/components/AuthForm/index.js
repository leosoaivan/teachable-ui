import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
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
