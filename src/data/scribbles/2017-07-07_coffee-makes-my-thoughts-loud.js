import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkWhoa from 'remark-whoa';
import React from 'react';

import Whoa from '../whoa-components';
import BlogPost from '../components/Blog/Post.js';

const whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;

const attributes = {
  title: 'Coffee',
  slug: 'coffee-makes-my-thoughts-loud',
  date: 'July 6, 2017',
  js: true,
};

export default () => (
  <BlogPost attributes={attributes}>
    <Whoa>
      {whoaParse(
        `
I don't know why I titled this coffee. |-That's something you should know about my workflow, maybe. I title and slug a post before writing, and rarely do I change it.-|

# ☕ This is the *hot beverage* emoji.
## I always thought it was the *coffee* emoji.
If there's one source I trust when it comes to emoji, it is [emojipedia](https://emojipedia.org/hot-beverage/).

They have a great [FAQ](https://emojipedia.org/faq/).

> 🙋 Emoji or emojis? What is the correct plural of emoji?

These are the questions.

For real emojipedia is a great resource. It's *(sic)* got the latest on what is to come in the **future of emoji**, with the next versions of Unicode. Currently, we (the world) are on Unicode 10.0 and Emoji 5.0. Emoji proposals for Unicode 11 were due July 1, 2017, so it looks like that ship has sailed ⛵.

I wonder who is behind it (emojipedia)...

🔎Who runs emojipedia?🔍

# It looks like [Jeremy Burge](https://twitter.com/jeremyburge) is the man behind the 🎭.

**Yes** he is indeed. He's a member of of the Unicode Emoji Subcommittee. I wonder how you get to that point in your career. Bouncing around the [Unicode website](http://www.unicode.org) now. It's interesting to see who the [full members of the Unicode Consortium](http://www.unicode.org/consortium/members.html#full) are. Here's a snapshot from their site.

![unicode-consortium-full-members](/static/blog/unicode-consortium-full-members.png)

Should we (the people) be concerned that Adobe, Apple, Facebook, Netflix, Google et al are deciding what emotions we can feel??? Probably not. I'm more worried about one of the two  individual members with **over 20 years** as a member of the consortium—the one named  **Tex Texin**. It costs $18,000 per year to be a full member of the consortium (as a company or organization, that is.) An individual can join for $75, but it looks like that doesn't buy you a vote at the technical committee meetings.

Why would an individual want to join the Unicode Consortium? Obviously, to *"demonstrate your commitment to the field"*.

> If you are a technical professional in areas of software globalization, software internationalization, or font technology, joining the Unicode Consortium demonstrates your commitment to your field. As an Individual member, you have full access to email lists which allows you to join discussions on the ongoing development of the Unicode Standard. Individual members may participate in technical committee meetings at the discretion of the chair.

Jeremy Burge is certainly committed.

    `
      )}
    </Whoa>
    <p>Would it surprise you if I told you this 👇 was Tex Texin?</p>
    <div id="tex" />
    <p style={{fontSize: '48px'}}>Well it is.</p>
    <style jsx>{`
      #tex {
        background: url(/static/blog/TexTexin.jpg);
        height: 0; width: 100%;
        padding-bottom: 200px;
        position: relative;
      }
      #tex::before {
        content: 'hover/tap to reveal';
        text-align: center;
        line-height: 200px;
        position: absolute;
        width: 100%;
        height: 100%;
        background: #cacaca;
        display: block;
        opacity: 1;
        transition: opacity 0.3s;
      }


      #tex:hover::before {
        opacity: 0;
      }
    
    `}</style>
  </BlogPost>
);
