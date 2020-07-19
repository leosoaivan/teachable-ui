import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import {
  Form,
  Field as FormikField,
  ErrorMessage,
} from 'formik';
import Field from './Field';
import Button from '../Button';

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
      <FormikField
        type="email"
        name="email"
        icon="envelope"
        component={Field}
      />
      <ErrorMessage name="email" component="div" />
      <FormikField
        type="password"
        name="password"
        icon="key"
        component={Field}
      />
      <ErrorMessage name="password" component="div" />
      {authState === 'signUp'
        ? (
          <React.Fragment>
            <FormikField
              type="password"
              name="password_confirmation"
              icon="key"
              component={Field}
            />
            <ErrorMessage name="password_confirmation" component="div" />
          </React.Fragment>
        ) : null}
      <Button
        type="submit"
        disabled={isSubmitting}
      >
        Submit
      </Button>
    </LoginForm>
  );
};

AuthForm.propTypes = {
  authState: PropTypes.oneOf(['signIn', 'signUp']).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default AuthForm;
