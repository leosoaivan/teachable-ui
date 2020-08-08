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
      return errors.email;
    },
    endpoint: 'http://localhost:3000/login',
  },
  signUp: {
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
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

export default authFormProps;
