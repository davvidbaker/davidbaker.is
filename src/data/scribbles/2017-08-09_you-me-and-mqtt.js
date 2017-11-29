import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkWhoa from 'remark-whoa';
import React from 'react';

import Whoa from '../whoa-components';
import MeList from '../components/MeList.js';
import BlogPost from '../components/Blog/Post.js';

const whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;

const attributes = {
  title: 'Great Slug',
  slug: 'you-me-and-mqtt',
  date: 'August 9, 2017',
  published: 'false',
  js: true,
};

export default () => (
  <BlogPost attributes={attributes}>
    <MeList
      title="I want"
      items={[
        'lots of things.',
        "to tell you about what I've been learning recently.",
        'more time.',
      ]}
    />
    <p>
      There's certain things about composabililitlity that differ from framework to framework. Especially when it comes to the style cascade. I guess I should try to use the standard? Shadow DOM encapsulation?
    </p>
    <Whoa>
      {whoaParse(
        'It took me far to long to just get to editing this post. I should definitely fix that ASAP. There are a bunch of things that I should do better.'
      )}
    </Whoa>
    <MeList
      title="This is a good space to practice"
      items={[
        'refactoring.',
        'maintaining.',
        'sustaining.',
        'experimenting.',
        'comparadacting.',
      ]}
    />

    <Whoa>
      {whoaParse(
        `
## I should look at prettier's source code. I wonder how easy it is to intercept its AST.

I just came across this quote for the first time.
> When applications are done well, they are just the really application-specific, brackish residue that can't be so easily abstracted away. All the nice, reusable components sublimate away onto github and npm where everybody can collaborate to advance the commons.

— substack from "how I write modules"

Really quick. **Idea** for learning a codebase. Visuals traces expressed as a graph of the traces through the files, functions, etc. I should make that happen.

___

*(...days later)* |- Does that matter?-|

I design experiences for users. \`<🙃🐢-revise>\`That sounds very indulgent, being a user myself.\`</🙃🐢-revise>\`.

I really need to just be doing everything with custom elements. Editable in browser in design mode. Should be able to have some cool abilities in design mode, using selections and stuff to wrap stuff and stuff. |- By the way, <🙃🐢-revise> is not a valid custom element name.-|

What's difficult about using [React](https://facebook.github.io/react/) for this? It *might* actually be easier to do the whole thing with React rendering custom elements, but then (a) I'd have to load React―not really a problem on desktop application, and (b) I think I'd learn more doing mostly everything by hand.

## This whole shebang really could use a refactor. 

Even though I gotta stop doing that...I really want to. Not starting quite from scratch but also mostly reusing ideas not implementation.

I always talk about not having the exact tool I need to do these things efficienlty. I really need to make take some effort towards making that tool. [component.io](https://component.io/projects) seems pretty cool, **but definitely not the UI that's in my mind.**

`
      )}
    </Whoa>

    <style global jsx>{`
        article li {
          list-style: none !important;
        }
        `}</style>
  </BlogPost>
);
