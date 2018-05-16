import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import FlambeLogo from 'flambe-logo';

import colors from '../constants/colors';

const UL = styled.ul`
  list-style: none;
  padding: 10px;
  margin-bottom: 70vh;

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
    font-size: 1em;
  }
  p {
    display: inline;
    color: #888;
    font-family: monospace;
    font-size: 1em;
  }

  .draft {
    font-family: monospace;
    margin-right: 1em;
    font-size: 1.5em;
    position: absolute;
    transform: rotate(-3deg);
    pointer-events: none;

    span {
      display: inline-block;
    }
  }

  .overlay {
    position: sticky;
    z-index: 100000;
    top: 0;

    &::after {
      pointer-events: none;
      content: '';
      position: absolute;
      height: 100vh;
      width: 100vw;
      background: linear-gradient(white,  transparent, 10%, transparent 90%, white)
    }
  }
`;

class PostList extends Component {
  componentDidMount() {
    // this.props.clear();
  }

  render() {
    return (
      <UL>
        <FlambeLogo size={20}></FlambeLogo>
        <div className="overlay" />
        {this.props.posts.map(post => {
          const isDraft = post.node.fileAbsolutePath.includes('/drafts/');
          return (
            <li key={post.node.frontmatter.path}>
              {isDraft && (
                <span className="draft">
                  Draft{' '}
                  <span
                    style={{
                      transform: `rotate(${-0.15 + 0.3 * Math.random()}turn)`,
                    }}
                  >
                    🙈
                  </span>
                </span>
              )}
              <Link
                href={{
                  /** ⚠️ is this (pathname) right 👇?? */
                  pathname: '/blog',
                  query: { slug: post.slug },
                }}
                to={`/scribbling-about-${post.node.frontmatter.path}`}
              >
                <h1
                  style={{
                    opacity: isDraft
                      ? 0.25
                      : `${post.node.wordCount.words / 200 / 10 + 0.5}`,
                    fontSize: isDraft
                      ? '1em'
                      : `${post.node.wordCount.words / 200 / 2 + 0.5}em`,
                  }}
                >
                  {post.node.frontmatter.title}
                </h1>
              </Link>{' '}
              <p>{post.node.frontmatter.date}</p>
            </li>
          );
        })}
      </UL>
    );
  }
}

export default PostList;
