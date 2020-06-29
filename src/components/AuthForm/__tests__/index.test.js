import React from 'react';
import { shallow } from 'enzyme';
import AuthForm from '..';

describe('AuthForm', () => {
  test('It renders properly', () => {
    const wrapper = shallow(
      <AuthForm />,
    );

    console.log(wrapper.debug());
  });
});
