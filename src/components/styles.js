import React from 'react';

const BlogGlobalStyles = () => (
  <style global jsx>{`
    * {
      font-family: sans-serif;
    }

    p {
      line-height: 1.5;
    }

    article ul {
      list-style: disc;
      padding-left: 2rem;
    }
  `}</style>
);

export default BlogGlobalStyles;
