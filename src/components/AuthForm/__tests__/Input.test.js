import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';
import thm from '../../../styling/theme';

describe('Input', () => {
  it('Renders an Input without error styling', () => {
    const tree = renderer.create(
      <Input
        field={{}}
        form={{ errors: {} }}
        icon="envelope"
      />,
    ).toJSON();

    expect(tree).toHaveStyleRule('border-color', thm.formField);
  });

  it('Renders an Input with error styling', () => {
    const tree = renderer.create(
      <Input
        field={{ name: 'email' }}
        form={{ errors: { email: 'Required' } }}
        icon="envelope"
      />,
    ).toJSON();

    expect(tree).toHaveStyleRule('border-color', thm.warning);
  });
});
