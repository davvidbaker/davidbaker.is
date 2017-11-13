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
  render() {
    return <Article>{this.props.children}</Article>;
  }
}

// const PostWithToggle = WithToggle('sideBarVisible')(Post);

export default PostBody;
