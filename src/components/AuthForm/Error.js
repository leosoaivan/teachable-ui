import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Root = styled.div`
  box-sizing: border-box;
  margin-top: -40px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

const Error = ({ children }) => {
  const [marginBottom, setMarginBottom] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    if (children) {
      setMarginBottom(40 - rootRef.current.clientHeight);
    }
  }, [children]);

  return (
    <Root
      marginBottom={marginBottom}
      ref={rootRef}
    >
      {children}
    </Root>
  );
};

Error.propTypes = {
  children: PropTypes.string,
};

Error.defaultProps = {
  children: null,
};

export default Error;
