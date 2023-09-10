/**
 *
 * WordChoice
 *
 */

/**
 * 💁⚠️ Right now, word choice will only work for up to three words
 */

import React from 'react';
import styled from 'styled-components';

import { popupStyle } from '../Popup';

const Multiple = styled.span`
  display: inline-block;
  position: relative;

  &::before,
  &::after {
    opacity: 0.05;
    display: block;
    position: absolute;
    font-size: 0.8rem;
    line-height: 0.8rem;
    z-index: -1;
  }
  &:hover::before,
  &:hover::after {
    opacity: 1;
    background: rgba(255, 255, 255, 0.95);
    z-index: 1;
  }
  &::before {
    bottom: 80%;
    content: attr(data-before);
    /* transform: translateY(-180%); */
  }
  &::after {
    content: attr(data-after);
    top: 75%;
    /* transform: translateY(-0.3rem); */
  }
`;

const Single = styled.span`
  &::before {
    position: absolute;
    content: 'WC';
    z-index: -1;
    opacity: 0.2;
    color: lightblue;
    font-size: 2rem;
  }
  &:hover::after {
    ${popupStyle} content: '👈 word choice';
    line-height: 1;
    background: firebrick;
  }
`;

function noBreakingSpace(str = '') {
  return str.replace(/\s/, ' ');
}

function WordChoice({ children }) {
  return children[1] ? (
    <Multiple
      data-before={noBreakingSpace(children[1])}
      data-after={noBreakingSpace(children[2])}
    >
      {children[0]}
    </Multiple>
  ) : (
    <Single>{children[0]}</Single>
  );
}

WordChoice.propTypes = {};

export default WordChoice;
