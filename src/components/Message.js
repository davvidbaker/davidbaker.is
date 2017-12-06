import shortid from 'shortid';
import React from 'react';
import styled from 'styled-components';
import marked from 'marked';

const Div = styled.div`
  .message {
    --me-color: #ddd;
    --you-color: dodgerblue;
    --border-radius: 10px;

    display: inline-block;
    color: white;
    padding: 5px;
    margin: var(--border-radius, 10px) !important;
    position: relative;
    max-width: 75%;
  }
  .message::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: -5px;
    bottom: 0;
    border-top: var(--border-radius, 10px) solid transparent;
    border-bottom: 0px solid transparent;
  }

  .you-column {
    text-align: right;
  }

  .you-column,
  .me-column {
    p,
    h1,
    h2,
    h3,
    h4 {
      margin: 0.25rem;
      display: inline-block;
    }
  }

  .me {
    color: black;
    border-radius: var(--border-radius, 10px) var(--border-radius, 10px)
      var(--border-radius, 10px) 0;
    background: var(--me-color);
  }
  .me::before {
    border-right: var(--border-radius, 10px) solid var(--me-color);
    border-left: 0px solid transparent;
  }
  .you {
    border-radius: var(--border-radius, 10px) var(--border-radius, 10px) 0
      var(--border-radius, 10px);
    background: var(--you-color);
    text-align: left;
  }
  .you::before {
    right: -5px;
    left: unset;
    border-left: var(--border-radius, 10px) solid
      ${props => (props.bg ? props.bg : 'var(--you-color)')};
    border-right: 0px solid transparent;
  }
`;

const Message = ({ value, me = false, style }) => {
  const id = shortid.generate();

  return (
    <Div bg={style && style.background ? style.background : null}>
      <div className={`${me ? 'me' : 'you'}-column`}>
        <div
          className={`message ${me ? 'me' : 'you'}`}
          id={id}
          style={style ? style : null}
          dangerouslySetInnerHTML={{ __html: marked(value) }}
        />
      </div>
    </Div>
  );
};

// <style>
//   {`#${id} {
//   ${style && `--you-color: ${style.background};`}
// }`}
// </style>
export default Message;
