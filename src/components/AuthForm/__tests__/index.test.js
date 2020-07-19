import React from 'react';
import { mount } from 'enzyme';
import AuthForm from '..';

describe('AuthForm', () => {
  it('Renders a sign in form', () => {
    const wrapper = mount(
      <AuthForm
        authState="signIn"
      />,
    );

    console.log(wrapper.debug());
  });
});
