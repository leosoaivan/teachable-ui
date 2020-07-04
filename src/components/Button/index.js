import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components/macro';
import thm from '../../styling/theme';

const Root = styled.button`
  width: 100%;
  background-color: ${(props) => (props.disabled ? thm.lightText : thm.actionPrimary)};
  border: 0;
  padding: 12px;
  border-radius: 12px;

  &:hover {
    border: 2px solid ${thm.actionPrimaryActive};
  }
`;

const ButtonText = styled.span`
  text-transform: uppercase;
  color: ${thm.lightText};
  font-weight: 600;
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
