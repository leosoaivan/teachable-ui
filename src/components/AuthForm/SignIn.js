import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import {
  Formik,
  Form,
  Field as FormikField,
  ErrorMessage,
} from 'formik';
import { AuthContext } from '../../contexts/AuthContext';
import Greeting from './Greeting';
import Field from './Field';
import Button from '../Button';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SignIn = ({ onChangeAuthState }) => {
  const { setAuthData } = useContext(AuthContext);

  return (
    <Root>
      <Greeting
        action="signIn"
        changeAuthState={onChangeAuthState}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await fetch('http://localhost:3000/login', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ user: values }),
            });
            const token = await response.json();

            setSubmitting(false);
            setAuthData(token);
          } catch (error) {
            console.log('Error logging in');
          }
        }}
      >
        {({ isSubmitting }) => (
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
        )}
      </Formik>
    </Root>
  );
};

SignIn.propTypes = {
  onChangeAuthState: PropTypes.func,
};

SignIn.defaultProps = {
  onChangeAuthState: () => {},
};

export default SignIn;
