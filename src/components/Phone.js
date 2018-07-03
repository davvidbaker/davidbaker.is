import React from 'react';
import styled from 'styled-components';

import Message from './Message';
import Messenger from './Messenger';

const Div = styled.div`
  --aspect-ratio: 2;
  --phone-height: 90vh;
  --phone-button-height: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  background: #000;
  border: 3px solid #999;
  height: var(--phone-height, 90vh);
  width: calc(var(--phone-height, 90vh) / var(--aspect-ratio, 2));
  max-height: 900px
  max-width: calc(900px / var(--aspect-ratio, 2));;
  border-radius: 5vmin;
  padding: 0 2%;
  box-shadow: 0 0 30px;

  transition: width 0.5s 0.1s, height 0.5s 0.3s;

.phone-screen {
  background: white;
  flex-grow: 1;
  width: 100%;
  height: 0;
}

.phone-speaker {
  width: 20%;
  height: 1%;
  background: #444;
  border-radius: 10%;
  margin: 5vmin auto;
}

.phone-button {
  background: #222;
  border-radius: 50%;
  width: var(--phone-button-height, 5vh);
  height: var(--phone-button-height, 5vh);
  margin: 3vmin auto;
  display: block;
}
.phone-button:focus {
  outline: none;
}
`;

const Phone = ({ messages, vertical, name = 'you', style = {} }) => (
  <Div style={style}>
    <div className="phone-speaker" />
    <div className="phone-screen">
      <Messenger className="messenger" name={name}>
        {messages.map(message => (
          <Message
            me={message.me}
            key={message.value}
            value={message.value}
            style={message.style}
          />
        ))}
      </Messenger>
    </div>
    <button
      className="phone-button"
      onClick={() =>
        smoothScrollTo(document.querySelector('.messenger-body'), 0)
      }
    />
  </Div>
);

function smoothScrollTo(
  node,
  scrollTo,
  { duration = 300 } = { duration: 300 }
) {
  if (node) {
    const scrollFrom = node.scrollTop;
    const scrollDist = scrollTo - scrollFrom;

    let startTime = null;
    let lastScrollTop = node.scrollTop + 10; // just set it to something not equal to node.scrollTop

    const scroll = timestamp => {
      if (!startTime) {
        startTime = timestamp;
      }

      const dt = timestamp - startTime;

      // eslint-disable-next-line no-param-reassign
      node.scrollTop = scrollFrom + scrollDist * dt / duration;

      // if scrolling stopped, quit the loop
      if (
        Math.abs(node.scrollTop - scrollTo) > 1 &&
        node.scrollTop !== lastScrollTop
      ) {
        window.requestAnimationFrame(scroll);
        lastScrollTop = node.scrollTop;
      }
    };

    window.requestAnimationFrame(scroll);
  }
}

export default Phone;
