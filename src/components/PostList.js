import withRedux from 'next-redux-wrapper';
import { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';


class PostList extends Component {
  componentDidMount() {
    this.props.clear();
  }

  render() {
    return (
      <ul>
        {this.props.posts
          .sort(
            (a, b) =>
              new Date(b.date).valueOf() -
              new Date(a.date).valueOf()
          )
          .map(post =>
            <li key={`link-${post.slug}`}>
              <Link
                href={{
                  pathname: '/blog',
                  query: { slug: post.slug },
                }}
                as={`/${post.slug}`}
              >
                <a>
                  <h1 style={{opacity: `${post.readTime/10 + 0.5}`, fontSize:  `${post.readTime/2 + 0.5}rem`}} >{post.title}</h1>
                </a>
              </Link>
              {' '}
              <p>{post.date}</p>
            </li>
          )}

        <style jsx>{`
          ul {
            list-style: none;
            padding: 10px;
          }
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
            color: var(--color-main);
            font-size: 1rem;
          }
          p {
            display: inline;
            color: #888;
            font-family: var(--font-monospace);
            font-size: 1rem;
          }
        `}</style>
      </ul>
    );
  }
}

export default connect(null, dispatch => ({
  clear: () => {
    dispatch({ type: 'CLEAR' });
  },
}))(PostList);
