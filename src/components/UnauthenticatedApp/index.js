import React, { useState, useContext } from 'react';
import {
  Formik,
} from 'formik';
import styled from 'styled-components/macro';
import thm from '../../styling/theme';
import { AuthContext } from '../../contexts/AuthContext';
import Greeting from './Greeting';
import authFormProps from './utils/authFormProps';
import AuthForm from '../AuthForm';

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

const UnauthenticatedApp = () => {
  const { setAuthData } = useContext(AuthContext);
  const [authState, setAuthState] = useState('signIn');
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
            return (
              <AuthForm
                authState={authState}
                isSubmitting={isSubmitting}
              />
            );
          }}
        </Formik>
      </FormRoot>
    </Root>
  );
};

export default UnauthenticatedApp;
