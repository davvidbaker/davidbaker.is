/**
*
* Normatives
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withHandlers, compose } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';
import scrollToElement from 'scroll-to-element';

import colors from '../../constants/colors';

const UL = styled.ul`
  padding: 0;
  margin: 0;

  a {
    color: unset;
    text-decoration: none;
  }
  li {
    overflow-x: hidden;
    padding: 10px 15px;
    border-bottom: 1px solid #ededed;
    cursor: pointer;
  }
  li:nth-last-of-type(1) {
    border-bottom-color: #ccc;
  }
  li:hover {
    background: ${colors.highlight};
  }
`;

const enhance = compose(
  connect(state => ({
    normatives: state.whoa.normatives,
    currentPost: state.whoa.currentPost,
  })),
  withHandlers({
    onMouseEnter: dispatch => id => {
      document.querySelector(`#${id}`).style.background = colors.highlight;
    },
    onMouseLeave: dispatch => id => {
      document.querySelector(`#${id}`).style.background = 'unset';
    },
  })
);

const NormativesList = ({
  currentPost,
  normatives,
  onMouseEnter,
  onMouseLeave,
}) => (
  <UL className="offscreen">
    {normatives &&
      normatives.map(normative => (
        <li
          key={normative.id}
          onMouseEnter={() => {
            onMouseEnter(normative.id);
          }}
          onMouseLeave={() => {
            onMouseLeave(normative.id);
          }}
          onClick={() => {
            const toElement = document.getElementById(normative.id);
            scrollToElement(`#${normative.id}`, { duration: 300 });
          }}
        >
          <p>{normative.statement}</p>
        </li>
      ))}
  </UL>
);
NormativesList.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  normatives: PropTypes.array.isRequired,
};

export default enhance(NormativesList);
