import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PostList from '../components/PostList';
import astronaut from '../images/astronaut-pushing.svg';

const Main = styled.main`
  margin: 0 auto;
  max-width: 50rem;

  p {
    text-align: right;
  }
  
`;

class BlogIndex extends React.Component {
  componentDidMount() {
    /* ⚠️ not working. Just fucking think about it for a second and figure it out! 🤯 */
    // setTimeout(() => document.body.animate({ scrollTop: document.body.scrollHeight }, 200), 1000)
    // setTimeout(() => window.scrollTo({top: document.body.scrollHeight}), 1000);
    
    /* **************☝️**************    */

  }
  
  render() {
    /* ⚠️ not working */
    // window.scrollTo({top: document.body.scrollHeight});
    // document.body.animate({ scrollTop: document.body.scrollHeight }, 200)
    /***************☝️***********************************/
    /* I kinda like some kind of visual markup like this*/

    const posts = get(this, 'props.data.allWhoa.edges');

    return (
      <div>
        <Helmet title={'David Baker is Scribbling'} />
        {/* <Bio /> */}
        <Main>
          <p>I probably wouldn't read any of this if I were you. But if I were to find myself here for the first time, I might <a href="./moving-through-space-and-time">start from the beginning</a> to catch up.</p>
          <PostList posts={posts} />
        </Main>
        {/* <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} /> */}
        <img
          className="marginal marginal-right"
          src={astronaut}
          alt="Astronaut"
          style={{
            position: 'fixed',
            transform: 'scalex(-1)',
            bottom: 0,
            right: 0,
          }}
        />
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allWhoa(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fileAbsolutePath
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            title
          }
          wordCount {
            words
          }
        }
      }
    }
  }
`;
