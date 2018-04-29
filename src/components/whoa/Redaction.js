/**
 * TODO hit the space bar or something to remove all redactions.
 */

import shortid from 'shortid';
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Element from './Element';

const Span = styled.span`
  ${props =>
    props.redactionsVisible
      ? 'background: rgba(0,0,0,0.1)'
      : 'background: black'};
  transition: background-color 0.5s;

  *::selection {
    ${props =>
      props.redactionsVisible ? 'background: ``' : 'background: black;'};
  }
`;

const Redaction = ({ children, redactionsVisible }) => {
  return (
    <Span redactionsVisible={redactionsVisible}>
      {children.map(child => (
        <Element key={shortid.generate()} type={child.type} {...child}>
          {child.children}
        </Element>
      ))}
    </Span>
  );
};

export default connect(
  state => ({
    redactionsVisible: state.whoa.redactionsVisible,
  }),
  null
)(Redaction);
