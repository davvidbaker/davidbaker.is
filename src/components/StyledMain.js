import styled from 'styled-components';

import colors from '../constants/colors';

const Main = styled.main`
  position: relative;
  left: 300px;
  transition: width 0.5s, left 0.5s;
  font-size: 1em;

  .full-width-grid {
    display: grid;
    grid-template-columns: minmax(10px, 1fr) repeat(4, minmax(3em, 12.5em)) minmax(
        10px,
        1fr
      );

    * {
      grid-column: 2 / span 4;
    }
  }

  a {
    color: #0066c0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: rebeccapurple;
    }
  }

  blockquote {
    border-left: 5px solid #444;
    border-top: 5px solid #fff;
    border-bottom: 5px solid #fff;
    padding: 0.5em;
    padding-left: 1.5em;
    margin: 1em;
    background: #fafafa;

    p {
      margin: 0;
    }
  }

  h1 {
    font-size: 2rem;
  }

  h2,
  h3 {
    margin-bottom: 0.5em;
  }

  p {
    margin-top: 0;
    line-height: 1.75em;
    vertical-align: middle;
  }

  ul p {
    margin: 0;
  }

  del {
    color: salmon;
    position: relative;
    display: inline-block;
    &::after {
      content: '';
      position: absolute;
      left: -5%;
      top: -10%;
      width: 110%;
      height: 120%;
      background: #ff8a8a;
      box-shadow: 0px -1px 20px 3px lightsalmon,
        inset 0px 2px 5px 3px palevioletred;
      mix-blend-mode: multiply;
    }
  }
`;

export default Main;
