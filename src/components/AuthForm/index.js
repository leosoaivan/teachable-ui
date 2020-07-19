import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import {
  Form,
} from 'formik';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AuthForm = ({ authState, isSubmitting }) => {
  const loginFormDataTestId = authState === 'signIn' ? 'authform-sign-in' : 'authform-sign-up';
  return (
    <LoginForm
      dataTestId={loginFormDataTestId}
    >
      {authState === 'signIn'
        ? (
          <SignIn
            dataTestId="authform-sign-in"
            isSubmitting={isSubmitting}
          />
        ) : (
          <SignUp
            dataTestId="authform-sign-up"
            isSubmitting={isSubmitting}
          />
        )}
    </LoginForm>
  );
};

AuthForm.propTypes = {
  authState: PropTypes.oneOf(['signIn', 'signUp']).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default AuthForm;
