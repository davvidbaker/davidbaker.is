import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkWhoa from 'remark-whoa';
import React from 'react';

import Whoa from '../whoa-components';
import BlogPost from '../components/Blog/Post.js';
import MeList from '../components/MeList';

const whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;

const attributes = {
  title: 'I want...',
  slug: 'me-list-needs-a-better-name',
  date: 'August 1, 2017',
  js: true,
};

export default () => (
  <BlogPost attributes={attributes} hideTitle={true}>
    <MeList
      title="I want"
      items={[
        'text boxes.', 'layers.', 'hand-markup.', 'time-control sometimes.',
      ]}
    />
    
    <style jsx global>{`
      p { font-size: calc(4rem + 2vw); }
      li {
        list-style: none;
      }
      article {
        width: 90%;
        max-width: unset !important;
      }
      `}</style>
  </BlogPost>
);
