import React from 'react';
import { mount } from 'enzyme';
import AuthForm from '..';

describe('AuthForm', () => {
  test('It properly renders a sign-in form', () => {
    const wrapper = mount(
      <AuthForm
        authState="signIn"
        setAuthState={() => {}}
      />,
    );

    expect(wrapper.find('Greeting')).toHaveLength(1);
    expect(wrapper.find({ dataTestId: 'authform-sign-in' })).toHaveLength(1);
  });

  test('It properly renders a sign-in form', () => {
    const wrapper = mount(
      <AuthForm
        authState="signUp"
        setAuthState={() => {}}
      />,
    );

    expect(wrapper.find('Greeting')).toHaveLength(1);
    expect(wrapper.find({ dataTestId: 'authform-sign-up' })).toHaveLength(1);
  });
});
