import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Login = () => (
  <React.Fragment>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
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
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user: values})
        })

        let token = await response.json()

        console.log('RESPONSE: ', token)
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <LoginForm>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </LoginForm>
      )}
    </Formik>
  </React.Fragment>
);

export default Login;