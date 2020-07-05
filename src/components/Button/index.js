import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components/macro';
import thm from '../../styling/theme';

const Root = styled.button`
  width: 100%;
  background-color: ${(props) => (props.disabled ? thm.textLight : thm.actionPrimary)};
  border: 0;
  padding: 12px;
  border-radius: 12px;
  border-width: 2px;
  border-style: solid;
  border-color: ${thm.actionPrimary};

  &:hover {
    border-color: ${thm.actionPrimaryActive};
  }
`;

const ButtonText = styled.span`
  text-transform: uppercase;
  color: ${thm.textLight};
  font-weight: 600;
  font-size: 16px;
`;

const Button = ({ type, disabled, children }) => {
  return (
    <Root
      type={type}
      disabled={disabled}
    >
      <ButtonText>
        {children}
      </ButtonText>
    </Root>
  );
};

Button.propTypes = {
  children: Proptypes.node.isRequired,
  disabled: Proptypes.bool.isRequired,
  type: Proptypes.oneOf(['submit']).isRequired,
};

export default Button;
