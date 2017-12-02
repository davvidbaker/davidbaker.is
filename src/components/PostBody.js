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

class PostBody extends React.Component {
  // shouldComponentUpdate() {
  //   return false;
  // }
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
