import React from 'react';
import styled from 'styled-components/macro';
import media from '../../styling/media';
import SignIn from './SignIn';

const Root = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;

  ${media.phone`
    padding: 24px
  `}
`;

const AuthForm = () => {
  return (
    <Root>
      <SignIn />
    </Root>
  );
};

export default AuthForm;
