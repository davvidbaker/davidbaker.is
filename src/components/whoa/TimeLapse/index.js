import React from 'react';
import styled from 'styled-components';

import someTimeLater from '../../../fonts/some_time_later.otf';
const Div = styled.div`
  @font-face {
    font-family: 'some time later';
    src: url(${someTimeLater});
  }

  font-family: 'some time later', fantasy;
  font-size: 2em;
  grid-column: 1 / span 3 !important;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 1em;

  p {
    margin-bottom: 0;
    transform: rotate(1deg);
  }
`;

const TimeLapse = ({ children = 'Some Time Later' }) => {
  return (
    <Div>
      <p>{children}</p>
    </Div>
  );
};

export default TimeLapse;
