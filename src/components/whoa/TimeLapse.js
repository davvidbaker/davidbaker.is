import React from 'react';
import styled from 'styled-components';

import someTimeLater from '../../fonts/some_time_later.otf';

const Div = styled.div`
  @font-face {
    font-family: 'some time later';
    src: url(${someTimeLater});
  }

  font-family: 'some time later', fantasy;
  font-size: 2em;
`;

const TimeLapse = ({ children = 'Some Time Later' }) => {
  return <Div>{children}</Div>;
};

export default TimeLapse;
