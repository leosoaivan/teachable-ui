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
import Field from './Field';
import Button from './Button';
import authFormProps from './utils/authFormProps';

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AuthForm = ({ authState }) => {
  const { setAuthData } = useContext(AuthContext);
  const loginFormDataTestId = authState === 'signIn' ? 'authform-sign-in' : 'authform-sign-up';
  const formProps = authFormProps[authState];

  return (
    <Formik
      data-test-id="test"
      initialValues={formProps.initialValues}
      validate={formProps.validate}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await fetch(formProps.Formikendpoint, {
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
        <LoginForm
          data-test-id={loginFormDataTestId}
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
      )}
    </Formik>
  );
};

AuthForm.propTypes = {
  authState: PropTypes.oneOf(['signIn', 'signUp']).isRequired,
};

export default AuthForm;
