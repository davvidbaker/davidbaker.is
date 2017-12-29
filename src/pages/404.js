import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 0 auto;
  padding: 0 5px;
  max-width: 50rem;
  h1,
  h2,
  h3 {
    font-weight: normal;
  }
`;

class FourOFourPage extends Component {
  componentDidMount() {
    setInterval(() => (window.location.href += '1'), 200);
    if (typeof window !== 'undefined') {
      window
        .fetch(
          `https://mr.davidbaker.is/going-to-get-an-email/${
            window.location.pathname.match(/\/(.*)/)[1]
          }`
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  render() {
    const descriptor =
      typeof window !== 'undefined'
        ? window.location.pathname.match(/\/(.*)/)[1]
        : '404';
    return (
      <Div>
        <h1>
          So, you think David Baker is <strong>{descriptor}</strong>?
        </h1>
        <h2>
          We've sent him an email letting him know. Thanks for your input!
        </h2>
        <h1 style={{ fontSize: '5em', textAlign: 'center' }}>😜</h1>
        <h3 style={{ textAlign: 'right' }}>
          Maybe thanks to you, David will one day be {descriptor}!
        </h3>
      </Div>
    );
  }
}

export default FourOFourPage;
