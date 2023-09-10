import React from 'react';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

import { italic } from '../constants/styles';
import colors from '../constants/colors';
import Nav from '../components/Nav';

const GlobalStyle = createGlobalStyle`
  :root {
    /* --display-marginal: none; */
  }
  html {
    min-height: 100vh;
    box-sizing: border-box;
    height: 100%; 
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
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
`

// 💁 doing font-sizing based on https://css-tricks.com/rems-ems/
const Container = styled.div`
  font-size: 1rem;

  em,
  i {
    font-size: 1.25em;
    ${italic};
  }
`;

class IndexLayout extends React.Component {

  render() {
    const { location, children } = this.props;
    let header;

    // let rootPath = `/`;
    // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    //   rootPath = __PATH_PREFIX__ + `/`;
    // }

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
      <React.Fragment>
        <GlobalStyle />
        <Container>
          {header}
          {children}
        </Container>
      </React.Fragment>

    );
  }
}

IndexLayout.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
};

export const Layout = connect(state => ({ navVisible: state.navVisible }), null)(
  IndexLayout
);
