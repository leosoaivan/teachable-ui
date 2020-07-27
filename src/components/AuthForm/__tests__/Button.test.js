import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';
import thm from '../../../styling/theme';

describe('Button', () => {
  it('Renders an enabled button', () => {
    const tree = renderer.create(
      <Button
        type="submit"
        disabled={false}
      >
        Test
      </Button>,
    ).toJSON();

    expect(tree).toHaveStyleRule('background-color', thm.actionPrimary);
  });

  it('Renders a disabled button', () => {
    const tree = renderer.create(
      <Button
        type="submit"
        disabled
      >
        Test
      </Button>,
    ).toJSON();

    expect(tree).toHaveStyleRule('background-color', thm.textLight);
  });
});
