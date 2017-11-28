import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Helmet from 'react-helmet';

// import PageWrapper from '../components/PageWrapper';
import CycleItems from '../components/CycleItems';

import TwitterImg from '../images/twitter.svg';
import CodepenImg from '../images/codepen.png';
import GithubImg from '../images/github.svg';

const Main = styled.main`
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 20px;

  ul {
    list-style: none;
    padding: 0;
  }

  header h1 {
    font-size: 4rem;
    text-align: center;
    margin: 0 auto;
  }

  header h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: lighter;
    color: #999;
    margin-top: 0;
    margin-bottom: 0.75rem;
  }

  header ul {
    display: flex;
    justify-content: center;
  }

  header li {
    width: 35px;
    margin-right: 20px;
    position: relative;
  }
  header li:last-of-type {
    margin-right: 0;
  }

  header li::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: white;
    opacity: 0.5;
    pointer-events: none;
  }

  header li:hover::before {
    opacity: 0;
  }

  article {
    color: #222;
    line-height: 1.5;
  }
`;

const IndexPage = ({ url }) => (
  <div>
    <Helmet title="David Baker is Here" />
    <Main>
      <header>
        <h1>David Baker</h1>
        <h2>web developer making internet things</h2>
        <ul>
          <li>
            <a href="https://github.com/davvidbaker">
              <img src={GithubImg} alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/davvidbaker">
              <img src={TwitterImg} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/davvidbaker/">
              <img width="35px" src={CodepenImg} alt="Codepen" />
            </a>
          </li>
        </ul>
      </header>

      <article>
        <h2>Hello!</h2>
        <p>You're probably here because I am applying for a job!</p>

        <p>
          Currently,{' '}
          <strong>
            I am a developer at <a href="http://click3x.com/">Click 3X</a>
          </strong>
          , an agency in New York City. I've been at Click since June of 2016,
          and I've learned and grown a lot in that time, but now{' '}
          <strong>I am looking for a new challenge</strong>.
        </p>
        <p>
          I <span style={{ color: 'red' }}>❤</span> making stuff, and I love how
          quickly you can turn ideas into reality in our industry. I used to (
          <em>back in college</em>
          ) focus more on the hardware side of things but have found software to
          be much more accessible now that I don't have 24/7 access to a lab.
        </p>

        <p>
          I really am interested in how people―<em>users</em>, if you
          will―interact with technology and what kinds of experiences we can
          deliver to them in today's digital world. These days I'm mostly making
          things for the web platform.
        </p>

        <p>
          <strong>
            You should check out the{' '}
            <Link to="hacking">
              <a>projects page</a>
            </Link>
          </strong>{' '}
          to see some of my work. It contains a mix of client work and
          (unpolished) personal projects.
        </p>

        <hr />
        <h3>Here are some things you might want to know about me. Or not.</h3>
        <ul className="about-list">
          <CycleItems
            title="I believe in"
            items={[
              'design that serves a purpose.',
              'the potential of the internet to make positive change in the world.',
              'myself occasionally 🙃.',
              'the merits of iterative design.',
              'a web component future 🔧.',
              'the proliferation of emoji as a stage in the evolution of written language.',
            ]}
          />
          <CycleItems
            title="I would like to work"
            items={[
              'alongside smart, talented people who are passionate about what they do.',
              'mostly on the front end, but I am not afraid to get my hands dirty.',
              'on useful products that I believe in.',
              'with folks who value quality code.',
            ]}
          />
          <CycleItems
            title="I am interested in"
            items={[
              'new media 🤦.',
              'virtual reality.',
              'augmented reality.',
              'reality.',
              'annotations on the web.',
              'the internet of things.',
              'rapid prototyping.',
              'artificial intelligence.',
              'intelligence.',
              'sustainability in the tech world.',
              'the future of the internet 🌐.',
              'memory, specifically working memory.',
              'education.',
            ]}
          />
          <CycleItems
            title="When building websites, I care about"
            items={[
              'the user experience.',
              'performance ⚡.',
              'accessibility.',
              'the health of the codebase.',
              'vertical rhythm.',
            ]}
          />
        </ul>
      </article>
    </Main>
  </div>
);

// IndexPage.getInitialProps = async ({ store, isServer }) => ({ isServer });

export default IndexPage;
