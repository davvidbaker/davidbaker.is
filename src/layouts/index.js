import React from 'react';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';

let WebFont;
if (typeof window !== 'undefined') {
  WebFont = require('webfontloader');
}
// import WebFont from 'webfontloader';

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
    height: 100%; 
    overflow-y: auto;
    overflow-x: hidden;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    height: 100%;
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
  font-size: 1rem;

  em,
  i {
    font-size: 1.25em;
    ${italic};
  }
`;

const H1 = styled.h1``;

class IndexLayout extends React.Component {
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      WebFont.load({
        typekit: {
          id: 'diy2xuy',
        },
        /* ⚠️ I don't need the whole font, at least not now, so maybe only load needed glyphs... */
        google: {
          families: ['Yesteryear'],
        },
      });
    }
  };

  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    // if (
    //   location.pathname === rootPath ||
    //   /** 💁 include nav in top-level directories */
    //   location.pathname.match(/\//g).length === 1
    // ) {
    header = this.props.navVisible && <Nav location={location} />;
    // } else {
    //   header = null;
    // }
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
