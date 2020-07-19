import React from 'react';
import { mount } from 'enzyme';
import AuthForm from '..';

describe('AuthForm', () => {
  it('Renders a sign in form with email and password inputs', () => {
    const wrapper = mount(
      <AuthForm
        authState="signIn"
      />,
    );

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('[data-test-id="authform-sign-in"]')).toHaveLength(1);
    expect(wrapper.find('Input')).toHaveLength(2);
  });

  it('Renders a sign up form with email, password, and password confirmation inputs', () => {
    const wrapper = mount(
      <AuthForm
        authState="signUp"
      />,
    );

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('[data-test-id="authform-sign-up"]')).toHaveLength(1);
    expect(wrapper.find('Input')).toHaveLength(3);
  });
});
