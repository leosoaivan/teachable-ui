import React, { useState } from 'react';
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

const Field = ({
  field: { name },
  form: { errors },
  ...props
}) => {
  const {
    icon,
  } = props;

  const capitalizedName = name.toUpperCase();
  const [placeholder, setPlaceholder] = useState(capitalizedName);

  const handleFocus = () => {
    setPlaceholder(null);
  };

  const handleBlur = () => {
    setPlaceholder(capitalizedName);
  };

  return (
    <Root
      error={errors[name]}
    >
      <FontAwesomeIcon icon={icon} />
      <StyledInput
        type="text"
        name={name}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Root>
  );
};

Field.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object,
  }).isRequired,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
};

Field.defaultProps = {
  icon: undefined,
  placeholder: undefined,
};

export default Field;
