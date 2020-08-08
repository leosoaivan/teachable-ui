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

export {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
};
