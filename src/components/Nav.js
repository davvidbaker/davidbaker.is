import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Wrapper = styled.nav`
  width: 100%;
  overflow: hidden;

  ul {
    display: flex;
    justify-content: center;
    width: 100vw;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 15px 10px;
    transition: background 0.2s;
    color: #ccc;
    cursor: pointer;
  }
  li:hover {
    color: #222;
  }
  a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:visited {
    color: unset;
  }
`;

const activeStyle = {
  cursor: 'default',
  color: '#222',
};

const Nav = () => (
  <Wrapper>
    <ul>
      <li>
        <Link activeStyle={activeStyle} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyle} to="hacking">
          Projects
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyle} to="scribbling">
          Scribbles
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyle} to="resume">
          Résumé
        </Link>
      </li>
    </ul>
  </Wrapper>
);

export default Nav;
