import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import styled from 'styled-components';
import CommandPalette from 'react-command-palette';

import Whoa from '../components/whoa';
import PostHeading from '../components/PostHeading';
import PostBody from '../components/PostBody';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
// import CommandPalette from '../components/CommandPalette';
import StyledMain from '../components/StyledMain';
import WithEventListeners from '../components/WithEventListeners';
import commands from '../constants/commands';

const BlogPost = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

class BlogPostTemplate extends React.Component {
  state = {
    commandPaletteVisible: false,
  };

  componentDidMount() {
    this.props.setCurrentPost(this.props.data.whoa.frontmatter.title);
  }

  componentDidCatch(error, info) {
    debugger;
  }

  showCommandPalette = () => {
    this.setState({ commandPaletteVisible: true });
  };

  hideCommandPalette = () => {
    this.setState({ commandPaletteVisible: false });
  };

  render() {
    const post = this.props.data.whoa;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    const eventListeners = [
      [
        'keydown',
        e => {
          if (e.shiftKey && (e.metaKey || e.ctrlKey) && e.key === 'p') {
            /** 💁 By default, if chrome devtools are open, this will pull up their command palette, even if focus is in the page, not dev tools. */
            e.preventDefault();
            this.showCommandPalette();
          }
        },
      ],
    ];

    console.log(this.props.data);
    return (
      <WithEventListeners eventListeners={eventListeners} node={document}>
        {() => (
          <BlogPost>
            <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />

            <StyledMain
              style={{
                left: this.props.sideBarVisible ? '300px' : 0,
                width: this.props.sideBarVisible
                  ? 'calc(100% - 300px)'
                  : '100%',
              }}
            >
              {this.props.normatives.length > 0 && (
                <Header
                  sideBarVisible={this.props.sideBarVisible}
                  toggleSideBar={this.props.toggleSideBar}
                />
              )}
              <div
                style={{
                  maxWidth: '50rem',
                  margin: '0 auto',
                }}
              >
                <PostHeading date={post.frontmatter.date}>
                  {() => post.frontmatter.title}
                </PostHeading>
                <PostBody normatives={this.props.normatives}>
                  <Whoa>{() => JSON.parse(post.ast).children}</Whoa>
                </PostBody>
              </div>
            </StyledMain>
            <SideBar
              sideBarVisible={this.props.sideBarVisible}
              toggleSideBar={this.props.toggleSideBar}
            />

            <CommandPalette
              commands={commands}
              isOpen={this.state.commandPaletteVisible}
              hideCommandPalette={this.hideCommandPalette}
              dispatchAction={this.props.dispatchAction}
            />
          </BlogPost>
        )}
      </WithEventListeners>
    );
  }
}

export default connect(
  state => ({
    sideBarVisible: state.sideBarVisible,
    normatives: state.whoa.normatives,
  }),
  dispatch => ({
    setCurrentPost: title => dispatch({ type: 'CURRENT_POST_SET', title }),
    toggleSideBar: showing =>
      dispatch({ type: showing ? 'SIDE_BAR_HIDE' : 'SIDE_BAR_SHOW' }),
    dispatchAction: type => dispatch({ type }),
  })
)(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    whoa(frontmatter: { path: { eq: $path } }) {
      id
      ast
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
