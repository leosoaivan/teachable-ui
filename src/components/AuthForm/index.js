import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
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
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
} from './utils/validators';

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AuthForm = ({ authState, shouldFormReset, setShouldFormReset }) => {
  const { setAuthData } = useContext(AuthContext);
  const [authFormEndpoint, setAuthFormEndpoint] = useState(null);
  const formikRef = useRef();

  useEffect(() => {
    if (shouldFormReset) {
      formikRef.current.resetForm();
      setShouldFormReset(false);
    }
  }, [shouldFormReset, setShouldFormReset]);

  useEffect(() => {
    if (authState && authState === 'signIn') {
      setAuthFormEndpoint('http://localhost:3000/login');
    }

    if (authState && authState === 'signUp') {
      setAuthFormEndpoint('http://localhost:3000/signup');
    }
  }, [authState]);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await fetch(authFormEndpoint, {
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
  shouldFormReset: PropTypes.bool,
  setShouldFormReset: PropTypes.func,
};

AuthForm.defaultProps = {
  shouldFormReset: false,
  setShouldFormReset: () => {},
};

export default AuthForm;
