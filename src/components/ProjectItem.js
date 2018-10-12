import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { compose, withHandlers, withReducer } from 'recompose';
import styled from 'styled-components';

/* ⚠️ rather haphazard to do this 🤷 */
import FlambeLogo from '@flambe/logo';
import ribeye from '../images/ribeye.png';
// import Router from 'next/router';

import ExternalLinks from './ExternalLinks';
import Status from './Status';

const withToggle = compose(
  withReducer('focused', 'dispatch', (state, action) => {
    switch (action.type) {
      case 'FOCUS':
        return true;
      case 'UNFOCUS':
        return false;
      default:
        return state;
    }
  }),
  withHandlers({
    focus: ({ dispatch }) => event => {
      dispatch({ type: 'FOCUS' });
    },
    unfocus: ({ dispatch }) => event => {
      dispatch({ type: 'UNFOCUS' });
    },
  })
);

const Teaser = styled.div`
  flex: 2;
  align-self: center;
  z-index: 1;
`;

const TeaserImage = styled.img`
  width: 100%;
`;

const LI = styled.li`
  display: flex;
  flex-direction: column;
  border: solid #cecece 1px;
  padding: 10px;
  background: white;
  position: relative;

  ${({ gridColumn }) => (gridColumn ? `grid-column: ${gridColumn}` : '')};
  ${({ gridRow }) => (gridRow ? `grid-row: ${gridRow}` : '')};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }

  h1 {
    margin: 0;
    line-height: 1;
  }

  h1 span {
    color: #ddd;
    font-size: smaller;
  }

  .tagline {
    flex: 1;
  }

  ul {
    display: flex;
  }
`;

/* Replaces the comma with a Unicode no-breaking hypen */
const formatYears = years => String(years).replace(',', '‑');

const ProjectItem = ({
  name = '[Name Here]',
  path,
  tagline = 'tagline',
  highlight = false,
  status,
  description,
  year,
  link,
  linkToSource,
  linkToTrello,
  callToAction = 'Check it out',
  focused,
  focus,
  unfocus,
  showAdditionalInfo,
  agency,
  gridColumn,
  gridRow,
}) => {
  return (
    <LI
      className={`project ${highlight && 'highlight-project'}`}
      onMouseEnter={focus}
      onMouseLeave={unfocus}
      /* ⚠️ Idk If I like this pattern */
      {...{ gridRow, gridColumn }}
    >
      <h1>
        {name} <span>{year && formatYears(year)}</span>
      </h1>
      {status && <Status status={status} focused={focused} />}
      <p className="tagline">{tagline}</p>
      {(name === 'flambé' || name === 'Udder Space') && (
        <Teaser>
          {name === 'flambé' && <FlambeLogo isAnimated size={128} />}
          {name === 'Udder Space' && <TeaserImage src={ribeye} alt="" />}
        </Teaser>
      )}
      {description ? <Link to={`/${path}`}>Read more...</Link> : null}
      <ExternalLinks {...{ link, linkToSource, linkToTrello, callToAction }} />
    </LI>
  );
};

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  status: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  year: PropTypes.arrayOf(PropTypes.number),
  callToAction: PropTypes.string,
  link: PropTypes.string,
  linkToSource: PropTypes.string,
  linkToTrello: PropTypes.string,
};

export default withToggle(ProjectItem);
