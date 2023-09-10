import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Span = styled.span`
  position: absolute;
  background: firebrick;
  border-radius: 3px;
  padding: 5px;
  color: white;
  opacity: 0.95;
  z-index: 1;
`;
const Popup = ({ children, additionalStyles = {} }) => (
  <Span style={additionalStyles}>{children}</Span>
);

Popup.propTypes = {
  children: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object,
};

export default Popup;
