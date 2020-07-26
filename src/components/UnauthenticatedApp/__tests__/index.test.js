import React from 'react';
import { mount } from 'enzyme';
import UnauthenticatedApp from '..';

describe('UnauthenticatedApp', () => {
  it('Initially renders a sign in form', () => {
    const wrapper = mount(
      <UnauthenticatedApp />,
    );

    expect(wrapper.find('Greeting__Root')).toHaveLength(1);
    expect(wrapper.find('Greeting__Header').text()).toMatch(/welcome back/i);
    expect(wrapper.find('UnauthenticatedApp__FormRoot')).toHaveLength(1);
  });
});
