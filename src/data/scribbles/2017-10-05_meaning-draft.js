import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkWhoa from 'remark-whoa';
import React from 'react';
import styled from 'styled-components';

import MeList from '../components/MeList.js';
import Definition from '../components/Definition.js';
import Whoa from '../whoa-components';
import BlogPost from '../components/Blog/Post.js';

const whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;

const attributes = {
  title: 'Meaning',
  slug: 'meaning-draft',
  date: 'October 5, 2017',
  js: true,
};

const Div = styled.div`
  padding: 25px;
  background: gainsboro;  
`;

export default () => (
  <BlogPost attributes={attributes}>
    <p>
      I've made starts at this essay too many times. I think I do this when I am sad.
    </p>

    <h1 style={{ fontSize: '5rem', textAlign: 'center' }}>😢</h1>

    <p>
      The mass shooting in Vegas happened this past weekend.
    </p>

    <p>
      How do I fight the nihilism that locks me up? That's what it really is.
      {' '}
      <strong>Nihilism</strong>
      .
    </p>

    <p>
      It's so hard to try to live a meaningful life when you know there is no meaning. I think that's a big problem that faces my generation. Maybe friends and family could bring back some meaning into my life.
    </p>

    <h1>
      I would love to fall in
      {' '}
      <span style={{ color: 'palevioletred' }}>love</span>
      .
    </h1>

    <Whoa>
      {whoaParse(
        `I am not good at putting myself out there. This is probably my greatest character flaw. 🕵{Call it neurodiversity or call it mild Aspergers or whatever} the fuck you want. It's something I struggle with.
        
## I want to push the world forward in some way. 

Why? I'd like the world to be a more fun and friendly place? Maybe?

🕵{I also just want to be happy}. And getting attention of any sort brings me happiness. Okay no not any sort. Positive attention.

People are doing things with their lives. And I am just sort of floating. I have no meaningful job. I have no girlfriend. The only girls in my life are ones I have built friendships with over years, really. I've fallen in love with ✍{all of them}(Okay, that's not really true. But some of them. It definitely reads nicer as "all".). I don't think I could ever tell them.`
      )}
    </Whoa>
    <MeList
      title="I am afraid"
      items={['to lose my friends.', 'of rejection.']}
    />

    <Whoa>
      {whoaParse(
        `### Maybe it's not so much that I'm afraid of rejection, but that I am afraid I am repulsive.
        
I am putting this out there into the ether because no one will ever see it. And if they do, I'll appear to be 🕵{just another self-hating loser on the internet}. Which I guess I am. There are plenty of people I am sure who are just like me.
`
      )}
    </Whoa>

    <Div>
      <Definition word="me" ipa="miiiiii" PoS="noun">
        <Whoa>{whoaParse('just another shlub on the internet')}</Whoa>
      </Definition>
    </Div>

    <style global jsx>{`
        article li {
          list-style: none !important;
        }
        `}</style>
  </BlogPost>
);
