/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components/macro';
import thm from '../../styling/theme';

const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 48px;
  background-color: ${thm.formField};
  width: 100%;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.borderColor ? thm.warning : thm.formField)};
`;

const StyledInput = styled.input`
  border: 0;
  margin-left: 12px;
  background-color: ${thm.formField};
  width: 100%;
  color: ${thm.textGrey};
`;

const Input = ({ field, form, ...props }) => {
  const { icon } = props;
  const borderColor = form.errors[field.name] && form.touched[field.name];

  return (
    <Root
      borderColor={borderColor}
    >
      <FontAwesomeIcon icon={icon} />
      <StyledInput
        type="text"
        {...field}
        {...form}
      />
    </Root>
  );
};

Input.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
  }).isRequired,
  icon: PropTypes.string,
};

Input.defaultProps = {
  icon: undefined,
};

export default Input;
