import styled from 'styled-components';
import React from 'react';
import { italic } from '../../constants/styles';

const StyledSic = styled.span`
  ${italic};
  opacity: 0.5;

  &::before {
    content: '[';
  }

  &::after {
    content: ']';
  }

  &::before,
  &::after {
    font-family: sans-serif;
    font-style: normal;
    transform: scaley(0.8);
    display: inline-block;
    transform-origin: 0 70%;
  }
`;

const Sic = () => <StyledSic>sic</StyledSic>;

export default Sic;
