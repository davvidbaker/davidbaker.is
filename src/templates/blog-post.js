import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import styled from 'styled-components';
import Commander from 'react-commander';

import Whoa from '../components/whoa';
import PostHeading from '../components/PostHeading';
import PostBody from '../components/PostBody';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
// import Commander from '../components/Commander';
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
    com: false,
  };

  componentDidMount() {
    this.props.setCurrentPost(this.props.data.whoa.frontmatter.title);

    if (process.env.NODE_ENV === `production`)
      if (typeof document !== 'undefined') {
        /** ⚠️🔮 TURN INTO A GATSBY PLUGIN? */
        const utterances = document.createElement('script');
        utterances.setAttribute('src', 'https://utteranc.es/client.js');
        utterances.setAttribute('repo', 'davvidbaker/blog');
        utterances.setAttribute('branch', 'master');
        utterances.setAttribute('issue-term', 'pathname');
        utterances.setAttribute('async', true);
        document.querySelector('main').appendChild(utterances);
      }
  }

  componentDidCatch(error, info) {
    debugger;
  }

  submitCommand = command => {
    this.hideCommander();
    this.props.dispatchAction(command);
  };

  showCommander = () => {
    this.setState({ com: true });
  };

  hideCommander = () => {
    this.setState({ com: false });
  };

  componentWillUnmount() {
    this.props.showNav();
    this.props.clear();
  }

  render() {
    console.log('this.props, this.props.data', this.props, this.props.data);
    const post = this.props.data.whoa;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    if (post.frontmatter.bareNaked) {
      this.props.hideNav();
    } else {
      this.props.showNav();
    }

    const eventListeners = [
      [
        'keydown',
        e => {
          if (e.shiftKey && (e.metaKey || e.ctrlKey) && e.key === 'p') {
            /** 💁 By default, if chrome devtools are open, this will pull up their command palette, even if focus is in the page, not dev tools. */
            e.preventDefault();
            this.showCommander();
          }
        },
      ],
    ];

    return (
      <WithEventListeners
        eventListeners={eventListeners}
        node={typeof document !== 'undefined' ? document : undefined}
      >
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
                {!post.frontmatter.bareNaked && (
                  <PostHeading date={post.frontmatter.date}>
                    {() => post.frontmatter.title}
                  </PostHeading>
                )}
                <PostBody normatives={this.props.normatives}>
                  <Whoa>{() => JSON.parse(post.ast).children}</Whoa>
                </PostBody>
              </div>
            </StyledMain>
            <SideBar
              sideBarVisible={this.props.sideBarVisible}
              toggleSideBar={this.props.toggleSideBar}
            />

            <Commander
              commands={commands}
              isOpen={this.state.com}
              hideCommander={this.hideCommander}
              onSubmit={this.submitCommand}
            />
          </BlogPost>
        )}
      </WithEventListeners>
    );
  }
}

export default connect(
  state => ({
    navVisible: state.navVisible,
    normatives: state.whoa.normatives,
    sideBarVisible: state.sideBarVisible,
  }),
  dispatch => ({
    hideNav: () => dispatch({ type: 'NAV_HIDE' }),
    showNav: () => dispatch({ type: 'NAV_SHOW' }),
    setCurrentPost: title => dispatch({ type: 'CURRENT_POST_SET', title }),
    toggleSideBar: showing =>
      dispatch({ type: showing ? 'SIDE_BAR_HIDE' : 'SIDE_BAR_SHOW' }),
    dispatchAction: type => dispatch({ type }),
    clear: () => dispatch({ type: 'CLEAR' }),
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
        bareNaked
      }
    }
  }
`;
