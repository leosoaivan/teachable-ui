import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 0 0 24px 0;
  background-color: ${(props) => props.theme.colors.platinum};
  width: 100%;
`;

const StyledInput = styled.input`
  border: 0;
  margin-left: 12px;
  background-color: ${(props) => props.theme.colors.platinum};
  width: 100%;
`;

const CustomField = ({
  field: { name },
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
    <Root>
      <FontAwesomeIcon icon={icon} />
      <StyledInput
        type="text"
        name={name}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // onFocus={(e) => e.target.placeholder = ""}
        // onBlur={(e) => e.target.placeholder = placeholder}
      />
    </Root>
  );
};

CustomField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  placeholder: PropTypes.string,
};

CustomField.defaultProps = {
  placeholder: undefined,
};

export default CustomField;
