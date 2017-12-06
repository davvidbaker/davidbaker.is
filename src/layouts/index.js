import React from 'react';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';

import { italic } from '../constants/styles';
import colors from '../constants/colors';
import Nav from '../components/Nav';

injectGlobal`
  :root {
    /* --display-marginal: none; */
  }

  html {
    min-height: 100vh;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: sans-serif;    
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

hr {
  margin: 2em auto;
  border-left: 10vw solid transparent;
  border-right: 10vw solid transparent;
  width: 30%;
}

a {
  color: ${colors.link};
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
`;

// 💁 doing font-sizing based on https://css-tricks.com/rems-ems/
const Container = styled.div`
  /* font-family: 'mr-eaves-modern', sans-serif; */
  /* font-size: 1.5rem; */

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

class IndexLayout extends React.Component {
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

    console.log('location', location);
    if (
      location.pathname === rootPath ||
      /** 💁 include nav in top-level directories */
      location.pathname.match(/\//g).length === 1
    ) {
      header = this.props.navVisible && <Nav location={location} />;
    } else {
      header = null;
    }
    return (
      <Container>
        {header}
        {children()}
      </Container>
    );
  }
}

IndexLayout.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
};

export default connect(state => ({ navVisible: state.navVisible }), null)(
  IndexLayout
);
