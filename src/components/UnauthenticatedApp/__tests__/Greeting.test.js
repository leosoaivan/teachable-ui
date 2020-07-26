import React from 'react';
import { mount } from 'enzyme';
import Greeting from '../Greeting';

describe('Greeting', () => {
  let changeAuthState;

  beforeAll(() => {
    changeAuthState = jest.fn();
  });

  it('Takes a prop to change authState to "signUp"', () => {
    const wrapper = mount(
      <Greeting
        action="signIn"
        changeAuthState={changeAuthState}
      />,
    );
    const authActionLink = wrapper.find('Greeting__AuthActionLink');

    expect(authActionLink).toHaveLength(1);
    authActionLink.simulate('click');
    expect(changeAuthState).toHaveBeenCalledWith('signUp');
  });

  it('Takes a prop to change authState to "signIn"', () => {
    const wrapper = mount(
      <Greeting
        action="signUp"
        changeAuthState={changeAuthState}
      />,
    );
    const authActionLink = wrapper.find('Greeting__AuthActionLink');

    expect(authActionLink).toHaveLength(1);
    authActionLink.simulate('click');
    expect(changeAuthState).toHaveBeenCalledWith('signIn');
  });
});
