import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import {
  Formik,
  Form,
  Field as FormikField,
  ErrorMessage,
} from 'formik';
import { AuthContext } from '../../contexts/AuthContext';
import Field from './Field';
import Button from '../Button';

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SignIn = ({ isSubmitting }) => (
  <LoginForm>
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

export default SignIn;
