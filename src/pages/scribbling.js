import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

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
  render() {
    const posts = get(this, 'props.data.allWhoa.edges');

    return (
      <div>
        <Helmet title={'David Baker is Scribbling'} />
        {/* <Bio /> */}
        <Main>
          <p>I probably wouldn't read any of this if I were you.</p>
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
  route: React.PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allWhoa(sort: { fields: [frontmatter___date], order: DESC }) {
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
        }
      }
    }
  }
`;
