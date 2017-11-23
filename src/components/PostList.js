import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import colors from '../constants/colors';

const UL = styled.ul`
  list-style: none;
  padding: 10px;

  li {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:visited {
    color: rebeccapurple;
  }
  h1 {
    display: inline;
    color: ${colors.accent1};
    font-size: 1rem;
  }
  p {
    display: inline;
    color: #888;
    font-family: monospace;
    font-size: 1rem;
  }
`;

class PostList extends Component {
  componentDidMount() {
    // this.props.clear();
  }

  render() {
    return (
      <UL>
        {this.props.posts.map(post => (
          <li key={post.node.frontmatter.path}>
            <Link
              href={{
                pathname: '/blog',
                query: { slug: post.slug },
              }}
              to={post.node.frontmatter.path}
            >
              <h1
                style={{
                  opacity: `${post.readTime / 10 + 0.5}`,
                  fontSize: `${post.readTime / 2 + 0.5}rem`,
                }}
              >
                {post.node.frontmatter.title}
              </h1>
            </Link>{' '}
            <p>{post.node.frontmatter.date}</p>
          </li>
        ))}
      </UL>
    );
  }
}

export default PostList;
