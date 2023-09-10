import * as React from "react"
import { styled } from 'styled-components'
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

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
const NotFoundPage = () => {
  const descriptor =
    typeof window !== 'undefined'
      ? window.location.pathname.match(/\/(.*)/)[1]
      : '404';
  return (
    <main style={pageStyles}>
      <Div>
        <h1>
          So, you think David Baker is <strong>{ }</strong>?
        </h1>
        <h2>
          We've sent him an email letting him know. Thanks for your input!
        </h2>
        <h1 style={{ fontSize: '5em', textAlign: 'center' }}>😜</h1>
        <h3 style={{ textAlign: 'right' }}>
          Maybe thanks to you, David will one day be {descriptor}!
        </h3>
      </Div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
