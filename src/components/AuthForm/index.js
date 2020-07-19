import PropTypes from 'prop-types';
import React from 'react';
import {
  Formik,
} from 'formik';
import styled from 'styled-components/macro';
import thm from '../../styling/theme';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthForm = ({ authState, isSubmitting }) => {
  if (authState === 'signIn') {
    return (
      <SignIn
        dataTestId="authform-sign-in"
        isSubmitting={isSubmitting}
      />
    );
  }

  return (
    <SignUp
      dataTestId="authform-sign-up"
      isSubmitting={isSubmitting}
    />
  );
};

AuthForm.propTypes = {
  authState: PropTypes.oneOf(['signIn', 'signUp']).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default AuthForm;
