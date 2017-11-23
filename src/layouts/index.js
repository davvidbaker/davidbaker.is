import React from 'react';
import Link from 'gatsby-link';
import styled, { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';

import { italic } from '../constants/styles';

injectGlobal`
  :root {
    /* --display-marginal: none; */
  }

  html {
    min-height: 100vh;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
  }
  
.marginal {
  max-width: 250px;
  display: var(--display-marginal, block);
}

@media(max-width: 500px) {
  .marginal {
      transition: 0.4s;
      z-index: -100;
      opacity: 0.05;
    }
}
`;

// 💁 doing font-sizing based on https://css-tricks.com/rems-ems/
const Container = styled.div`
  /* font-family: 'mr-eaves-modern', sans-serif; */
  /* font-size: 1.5rem; */

  font-family: sans-serif;
  font-size: 1rem;

  em,
  i {
    font-size: 1.25em;
    ${italic};
  }

  /* em::before,
  em::after {
    content: '*';
    position: absolute;
    opacity: 0.25;
    font-size: 0.5em;
    transform: translatey(-0.25em);
  } */
`;

const H1 = styled.h1``;

class Template extends React.Component {
  componentDidMount = () => {
    WebFont.load({
      typekit: {
        id: 'diy2xuy',
      },
    });
  };

  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    if (location.pathname === rootPath) {
      // header = (
      //   <H1>
      //     <Link
      //       style={{
      //         boxShadow: 'none',
      //         textDecoration: 'none',
      //         color: 'inherit',
      //       }}
      //       to={'/'}
      //     >
      //       David Baker
      //     </Link>
      //   </H1>
      // );
      header = null;
    } else {
      header = null;
      // (
      //   <H1
      //     style={{
      //       fontFamily: 'Montserrat, sans-serif',
      //       marginTop: 0,
      //       // marginBottom: rhythm(-1),
      //     }}
      //   >
      //     <Link
      //       style={{
      //         boxShadow: 'none',
      //         textDecoration: 'none',
      //         color: 'inherit',
      //       }}
      //       to={'/'}
      //     >
      //       Gatsby Starter Blog
      //     </Link>
      //   </H1>
      // )
    }
    return (
      <Container>
        {header}
        {children()}
      </Container>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
