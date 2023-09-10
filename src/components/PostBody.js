import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Whoa from './whoa';
import SideBar from './SideBar';
import WithToggle from './WithToggle';

const Article = styled.article`
  padding: 5px;
  position: relative;
`;

function callNative(val) {
  try {
    webkit.messageHandlers.callbackHandler.postMessage(val);
  } catch (err) {
    console.log('The native context does not exist.');
  }
}

class PostBody extends React.Component {
  // shouldComponentUpdate() {
  //   return false;
  // }

  componentDidMount() {
    window.redBody = () => {
      document.body.style.background = 'palevioletred';
    };

    var options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 1.0,
    };

    if (window.IntersectionObserver) {
      var observer = new IntersectionObserver(callNative, options);
      observer.observe(document.body);
    } else {
      window.addEventListener('scroll', evt =>
        callNative(document.body.scrollTop)
      );
    }
  }

  componentDidCatch() {
    debugger;
  }

  /** ⚠️🔮 when I can use fragments (once Gatsby version of react (or react-next) has been updated, or maybe JSX or idk, babel for gatsby i thinkss, I should use fragment*/
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

// const PostWithToggle = WithToggle('sideBarVisible')(Post);

export default PostBody;
