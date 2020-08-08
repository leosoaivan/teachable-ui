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
import Input from './Input';
import Button from './Button';
import Error from './Error';
import authFormProps from './utils/authFormProps';

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AuthForm = ({ authState }) => {
  const { setAuthData } = useContext(AuthContext);
  const authFormDataTestId = authState === 'signIn' ? 'authform-sign-in' : 'authform-sign-up';
  const formProps = authFormProps[authState];

  const validateEmail = (value) => {
    console.log(value);

    if (!value) {
      return 'Required';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      return 'Invalid email address';
    }
    return null;
  };

  const validatePassword = (value) => {
    if (!value) {
      return 'Required';
    }
    return null;
  };

  const validatePasswordConfirmation = (values) => {
    if (!values.passwordConfirmation) {
      return 'Required';
    }
    if (values.password !== values.passwordConfirmation) {
      return 'Passwords do not match';
    }
    return null;
  };

  return (
    <Formik
      data-test-id={authFormDataTestId}
      initialValues={formProps.initialValues}
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
      {({ isSubmitting, values }) => (
        <LoginForm>
          <FormikField
            type="email"
            name="email"
            icon="envelope"
            component={Input}
            validate={validateEmail}
          />
          <ErrorMessage name="email" component={Error} />
          <FormikField
            type="password"
            name="password"
            icon="key"
            component={Input}
            validate={validatePassword}
          />
          <ErrorMessage name="password" component={Error} />
          {authState === 'signUp'
            ? (
              <React.Fragment>
                <FormikField
                  type="password"
                  name="passwordConfirmation"
                  icon="key"
                  component={Input}
                  validate={() => validatePasswordConfirmation(values)}
                />
                <ErrorMessage name="passwordConfirmation" component={Error} />
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
