import React from 'react';
import styled from 'styled-components';

import someTimeLater from '../../../fonts/some_time_later.otf';
import eggFlower from './eggflower.svg';
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
  /* animation: gradAn 1s infinite; */
  overflow: hidden;
  padding: 1em;
  /* transform: scalex(1.1) rotate(-1deg); */

  /* background: radial-gradient(
    ellipse at bottom left,
    #d2ff52 0%,
    #79ea4d 23%,
    #d2ff52 84%,
    #91e842 100%
  ); */
/* 
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100vh;
    mix-blend-mode: multiply;
    background: url(${eggFlower});
    background-repeat: repeat;
    /* background-repeat-y: repeat; */
    /* background-position-y: 40px; */
    /* opacity: 0.2; */
    /* transform: rotate(30deg); */
    /* transform-origin: 60% 30%; */

    /* animation: spinFlower 1101s infinite linear; */
  /* } */

  /* &::after {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    background: url(${eggFlower});
    background-size: contain;
    background-repeat: no-repeat;
    animation: zoom 1000s infinite linear;
    transform: scale(1) rotate(80deg);
    transform-origin: left center;
  } */

  p {
    margin-bottom: 0;
    transform: rotate(1deg);
  }

  /* @keyframes spinFlower {
    to {
      transform: rotate(390deg);
    }
  }

  @keyframes zoom {
    to {
      transform: scale(0) rotate(-1080deg);
      transform-origin: right center;
    }
  } */
`;

const TimeLapse = ({ children = 'Some Time Later' }) => {
  return (
    <Div>
      <p>{children}</p>
    </Div>
  );
};

export default TimeLapse;
