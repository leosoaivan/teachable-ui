import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components/macro';
import thm from '../../styling/theme';

const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 0 0 24px 0;
  background-color: ${thm.formField};
  width: 100%;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.error ? thm.warning : thm.formField)}
`;

const StyledInput = styled.input`
  border: 0;
  margin-left: 12px;
  background-color: ${thm.formField};
  width: 100%;
  color: ${thm.textGrey};
`;

const Field = ({ field, form, ...props }) => {
  const {
    name,
    value,
    onBlur,
    onChange,
  } = field;
  const { errors } = form;
  const { icon } = props;

  return (
    <Root
      error={errors[field[name]]}
    >
      <FontAwesomeIcon icon={icon} />
      <StyledInput
        type="text"
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    </Root>
  );
};

Field.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object,
  }).isRequired,
  icon: PropTypes.string,
};

Field.defaultProps = {
  icon: undefined,
};

export default Field;
