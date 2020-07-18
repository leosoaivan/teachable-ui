import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import {
  Formik,
} from 'formik';
import thm from '../../styling/theme';
import { AuthContext } from '../../contexts/AuthContext';
import Greeting from './Greeting';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Root = styled.div`
  position: absolute;
  top: 12.5%;
  width: 500px;
  padding: 48px;
  border: 1px solid ${thm.formField};
  border-radius: 4px;
  box-shadow: 0 0 4px 0 ${thm.boxShadow};
`;

const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AuthForm = () => {
  const [authState, setAuthState] = useState('signIn');
  const { setAuthData } = useContext(AuthContext);

  const authFormProps = {
    signIn: {
      initialValues: {
        email: '',
        password: '',
      },
      validate: (values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      },
      endpoint: 'http://localhost:3000/login',
    },
    signUp: {
      initialValues: {
        email: '',
        password: '',
        password_confirmation: '',
      },
      validate: (values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password !== values.password_confirmation) {
          errors.password = 'Passwords do not match';
          errors.password_confirmation = 'Passwords do not match';
        }
        return errors;
      },
      endpoint: 'http://localhost:3000/signup',
    },
  };

  return (
    <Root>
      <Greeting
        action={authState}
        changeAuthState={setAuthState}
      />
      <FormRoot>
        <Formik
          initialValues={authFormProps[authState.initialValues]}
          validate={authFormProps[authState.validate]}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await fetch(authFormProps.authState.endpoint, {
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
          {({ isSubmitting }) => {
            if (authState === 'signIn') {
              return (
                <SignIn
                  isSubmitting={isSubmitting}
                />
              );
            }

            return (
              <SignUp
                isSubmitting={isSubmitting}
              />
            );
          }}
        </Formik>
      </FormRoot>
    </Root>
  );
};

export default AuthForm;
