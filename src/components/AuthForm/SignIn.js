import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import {
  Formik,
  Form,
  Field as FormikField,
  ErrorMessage,
} from 'formik';
import media from '../../styling/media';
import { AuthContext } from '../../contexts/AuthContext';
import Field from './Field';
import Button from '../Button';

const Root = styled.div`
  width: 100%;
`;

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 75%;

  ${media.phone`
    width: 100%;
  `}
`;

const SignIn = () => {
  const { setAuthData } = useContext(AuthContext);

  return (
    <Root>
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

export default SignIn;
