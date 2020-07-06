import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import thm from '../../styling/theme';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 48px;
`;

const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${thm.text};
  margin-bottom: 24px;
`;

const SubHeader = styled.span`
  font-size: 12px;
`;

const AuthActionLink = styled.span`
  color: ${thm.actionSecondary};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

`;

const textContent = {
  signIn: {
    header: 'welcome back',
    subHeader: 'New to Teachable?',
    actionLink: 'Create an account.',
  },
  signUp: {
    header: 'create an account',
    subHeader: 'Already have an account?',
    actionLink: 'Log in.',
  },
};

const Greeting = ({ action, changeAuthState }) => {
  const {
    header,
    subHeader,
    actionLink,
  } = textContent[action];
  const authState = action === 'signIn' ? 'signUp' : 'signIn';

  return (
    <Root>
      <Header>
        {header}
      </Header>
      <SubHeader>
        {subHeader}
        &nbsp;
        <AuthActionLink
          onClick={() => changeAuthState(authState)}
        >
          {actionLink}
        </AuthActionLink>
      </SubHeader>
    </Root>
  );
};

Greeting.propTypes = {
  action: PropTypes.oneOf(['signIn', 'signUp']).isRequired,
};

Greeting.defaultProps = {};

export default Greeting;
