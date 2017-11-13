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

import smoothScrollTo from '../../utils/smoothScrollTo';

const UL = styled.ul`
  a {
    color: unset;
    text-decoration: none;
  }
  li {
    overflow-x: hidden;
    padding: 10px 15px;
    border-bottom: 1px solid #ededed;
  }
  li:nth-last-of-type(1) {
    border-bottom-color: #ccc;
  }
  li:hover {
    background: var(--color-highlight);
  }
`;

const enhance = compose(
  connect(state => ({
    normatives: state.whoa.normatives,
    currentPost: state.whoa.currentPost,
  })),
  withHandlers({
    onMouseEnter: dispatch => id => {
      console.log('mouse entered', id);
      document.querySelector(`#${id}`).style.background =
        'var(--color-highlight)';
    },
    onMouseLeave: dispatch => id => {
      document.querySelector(`#${id}`).style.background = 'unset';
      console.log('mouse left', id);
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
            const toNode = document.getElementById(normative.id);
            const scrollTo = toNode.getBoundingClientRect().top;
            const mainNode = document.querySelector('main');

            if (scrollTo < 0 || scrollTo > window.innerHeight) {
              smoothScrollTo(
                document.querySelector('main'),
                scrollTo +
                  (mainNode.scrollTop + mainNode.getBoundingClientRect().top)
              );
            }
          }}
        >
          <p>{normative.statement}</p>
        </li>
      ))}
    <style jsx>{``}</style>
  </UL>
);
NormativesList.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  normatives: PropTypes.array.isRequired,
};

export default enhance(NormativesList);
