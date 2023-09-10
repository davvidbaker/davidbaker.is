/**
 * Two ways to use this.
 *
 * 1. In parent component, import <Messenger> and wrap a bunch of <Messages />
 *
 * ⚠ maybe not 2. In parent component, import messengerize and apply that to a template literal with keys indicating me and you.
 */

// import Message from './Message';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  header {
    background: #f7f7f7;
    border-bottom: 1px solid #aaa;
    text-align: center;
  }

  header h1 {
    font-weight: bold;
    margin: 0.5rem auto;
  }

  .messenger-body {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    flex-grow: 1;
  }
`;

const Messenger = ({ children, name }) => (
  <Div>
    {name && (
      <header>
        <h1>{name}</h1>
      </header>
    )}
    <div className="messenger-body">{children}</div>
  </Div>
);

Messenger.propTypes = {
  name: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};

export default Messenger;

/*
<div className="full-width">
    <Phone>
      <Messenger className="messenger" name="You">
        <Message me>
          
        </Message>

        <Message me>
          <h3>It's me.</h3>
        </Message>

        <Message>
          <p>Me?</p><br /><br />
          <strong>You</strong> can't be <em>me</em>.
        </Message>

        <Message style={{ background: 'gold', color: 'black' }}>
          <h1>Who am I in this situation?</h1>
        </Message>

        <Message me>
          <p>
            You tell me.
          </p>
        </Message>

        <Message>
          <p>Does anyone else find this a bit annoying?</p>
        </Message>

        <Message>
          <p>I bet <strong>you</strong> do.</p>
        </Message>

        <Message me>
          <h2>How about an h2?</h2>
          <h1>These look the same no.</h1>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>
        <Message me>
          <p>Hello</p>
        </Message>

        <Message>
          <p>It's me</p>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>

        <Message>
          <p>
            A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj
          </p>
        </Message>

        <Message me>
          <h1>What does this look like</h1>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>
        <Message me>
          <p>Hello</p>
        </Message>

        <Message>
          <p>It's me</p>
        </Message>

        <Message>
          <h1>What does this look like</h1>
        </Message>

        <Message>
          <p>
            A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj
          </p>
        </Message>

        <Message me>
          <h1>What does this look f</h1>
        </Message>

      </Messenger>

    </Phone>
*/
