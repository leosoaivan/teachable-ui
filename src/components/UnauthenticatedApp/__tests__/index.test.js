import React from 'react';
import { mount } from 'enzyme';
import UnauthenticatedApp from '..';

describe('UnauthenticatedApp', () => {
  it('Initially renders a sign in form with a Greeting', () => {
    const wrapper = mount(
      <UnauthenticatedApp />,
    );

    console.log(wrapper.debug());
    expect(wrapper.find('[data-testid="authform-greeting-header"]')).toHaveLength(1);
  });
});
