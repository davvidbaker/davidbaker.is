import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: white;
  cursor: default;
  font-size: 0.75em;
  transition: opacity 0.2s;
  margin: 1em 0;

  .status-key,
  .status-value {
    padding: 3px 5px;
  }

  .status-key {
    background: #555;
    border-radius: 2px 0 0 2px;
  }

  .status-value {
    border-radius: 0 2px 2px 0;
  }
`;
const Status = ({ status, focused }) => (
  <Wrapper style={{ opacity: focused ? 1 : 0.3 }}>
    <span className="status-key">status</span>
    <span
      className="status-value"
      style={{ background: status[1] ? status[1] : 'black' }}
    >
      {status[0].replace(/\s/g, '\u00A0')}
    </span>
  </Wrapper>
);

export default Status;
