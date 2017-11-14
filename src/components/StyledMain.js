import styled from 'styled-components';

import colors from '../constants/colors';

const Main = styled.main`
  position: absolute;
  left: 300px;
  transition: width 0.5s, left 0.5s;
  font-size: 1em;

  a {
    color: #0066c0;
    text-decoration: none;

    &:visited {
      color: rebeccapurple;
    }
  }

  blockquote {
    border-left: 5px solid ${colors.accent1};
    padding: 0.5rem;
    padding-left: 1.5rem;
    margin: 0 1rem;
    p {
      margin: 0;
      margin-top: 0.5rem;
    }
    p::before {
      content: '';
      width: 20px;
      height: 5px;
      background: var(--color-main);
      position: absolute;
      transform: translateX(-1.5rem) translateY(-1rem);
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
`;

export default Main;
