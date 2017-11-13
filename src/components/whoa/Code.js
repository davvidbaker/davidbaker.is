/**
*
* Code
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InlineCode = styled.code`
  background: #f6f8fa;
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const BlockCode = styled.pre`
  padding: 1rem;
  background: #333;
  code {
    color: yellow;
  }
`;

function Code({ value, inline = false, ...props }) {
  return inline ? (
    <span>
      <InlineCode>{value}</InlineCode>
    </span>
  ) : (
    <pre>
      <code>{value}</code>
    </pre>
  );
}

Code.propTypes = {
  inline: PropTypes.bool,
};

export default Code;
