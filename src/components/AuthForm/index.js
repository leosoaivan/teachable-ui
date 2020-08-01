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

  return (
    <Formik
      data-test-id={authFormDataTestId}
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
        <LoginForm>
          <FormikField
            type="email"
            name="email"
            icon="envelope"
            component={Input}
          />
          <ErrorMessage name="email" component={Error} />
          <FormikField
            type="password"
            name="password"
            icon="key"
            component={Input}
          />
          <ErrorMessage name="password" component={Error} />
          {authState === 'signUp'
            ? (
              <React.Fragment>
                <FormikField
                  type="password"
                  name="password_confirmation"
                  icon="key"
                  component={Input}
                />
                <ErrorMessage name="password_confirmation" component={Error} />
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
