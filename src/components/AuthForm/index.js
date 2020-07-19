import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import {
  Formik,
} from 'formik';
import thm from '../../styling/theme';
import { AuthContext } from '../../contexts/AuthContext';
import Greeting from './Greeting';
import SignIn from './SignIn';
import SignUp from './SignUp';
import authFormProps from './utils/authFormProps';

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

const AuthForm = ({ authState, setAuthState }) => {
  const { setAuthData } = useContext(AuthContext);
  const formProps = authFormProps[authState];

  return (
    <Root>
      <Greeting
        action={authState}
        changeAuthState={setAuthState}
      />
      <FormRoot>
        <Formik
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
          {({ isSubmitting }) => {
            if (authState === 'signIn') {
              return (
                <SignIn
                  dataTestId="authform-sign-in"
                  isSubmitting={isSubmitting}
                />
              );
            }

            return (
              <SignUp
                dataTestId="authform-sign-up"
                isSubmitting={isSubmitting}
              />
            );
          }}
        </Formik>
      </FormRoot>
    </Root>
  );
};

AuthForm.propTypes = {
  authState: PropTypes.oneOf(['signIn', 'signUp']).isRequired,
  setAuthState: PropTypes.func,
};

AuthForm.defaultProps = {
  setAuthState: () => {},
};

export default AuthForm;
