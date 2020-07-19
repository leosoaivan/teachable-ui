import React from 'react';
import PropTypes from 'prop-types';
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

const SignIn = ({ dataTestId, isSubmitting }) => (
  <LoginForm
    data-test-id={dataTestId}
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
    <Button
      type="submit"
      disabled={isSubmitting}
    >
      Submit
    </Button>
  </LoginForm>
);

SignIn.propTypes = {
  dataTestId: PropTypes.string,
  isSubmitting: PropTypes.bool.isRequired,
};

SignIn.defaultProps = {
  dataTestId: null,
};

export default SignIn;
