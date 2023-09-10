import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  grid-column: 2;

  .inner-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  h1 {
    color: firebrick;
    margin-bottom: 0.25em;
    font-size: 2em;
  }

  p {
    align-self: flex-end;
    font-family: monospace;
    color: #888;
    font-size: 0.9em;
  }

  &.left-aligned {
    margin: unset;;
    justify-content: unset;

    .inner-title {
      align-items: unset;
      margin: unset;
    }
  }
`;

const PostHeading = ({ children, date, className }) => (
  <OuterDiv className={`outer-title${className ? ` ${className}` : ''}`}>
    <div className="inner-title">
      <h1>{children()}</h1>
      <p>{date}</p>
    </div>
  </OuterDiv>
);

export default PostHeading;
