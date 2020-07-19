import React from 'react';
import { mount } from 'enzyme';
import UnauthenticatedApp from '..';

describe('UnauthenticatedApp', () => {
  it('Renders a sign in form', () => {
    const wrapper = mount(
      <UnauthenticatedApp />,
    );

    // console.log(wrapper.debug());
  });
});
