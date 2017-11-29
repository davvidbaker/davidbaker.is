import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkWhoa from 'remark-whoa';
import React from 'react';

import Phone from '../components/Phone.js';
import Messenger from '../components/Messenger.js';
import Message from '../components/Message.js';
import Whoa from '../whoa-components';
import BlogPost from '../components/Blog/Post.js';

// ⚠️ this should really be somewhere else entirely, if anywhere outside of this file at all
import str from '../constants/2017-09-22.js';

const whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;

const attributes = {
  title: 'A Hwhile',
  slug: 'slerp',
  date: 'September 22, 2017',
  js: true,
};

const m0 = { margin: 0 };

export default () => (
  <BlogPost attributes={attributes}>
    <Whoa>
      {whoaParse(str)}
    </Whoa>

    <Phone vertical>
      <Messenger className="messenger" name="Me">
        <Message me>
          <h1 style={m0}>Maybe it's cuz of texting.</h1>
        </Message>

        <Message me>
          <h3 style={m0}>Probably not though.</h3>
        </Message>

        <Message>
          <p>It's probably just my fault.</p>
        </Message>
      </Messenger>
    </Phone>

    <p>
      Okay. I am adding styled-components to this blog? That actually might be a bad idea, until I can totally eleminate styled-jsx code, which probably won't be easy, due to its scoping.
    </p>

    {/*   */}
    <Whoa>
      {whoaParse(
        `🔎Migrate from styled-jsx to styled-components🔍
      
### Not much in way of results.

I think it's going to be kinda annoying but doable. My reason for doing it is that some things like dynamic variables don't work great in \`styled-jsx\`.
      `
      )}
    </Whoa>
  </BlogPost>
);
