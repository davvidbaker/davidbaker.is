import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
    padding: 0;
  }
  li:hover {
  }
  a {
    display: block;
    color: #ccc;
    margin: 0 10px;
    line-height: 3em;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
    color: #222;
  }

  .active {
    cursor: default;
    color: #222;
  }
`;

const activeStyle = {
  cursor: 'default',
  color: '#222',
};

/** 💁 root path was matching for all other paths, so I am not using activeStyle prop, but a class instead, for just that link */
const Nav = ({ location }) => (
  <Wrapper>
    <ul>
      <li>
        <Link
          className={
            location.pathname === '/' || location.pathname === '/online'
              ? 'active'
              : null
          }
          to="/online"
        >
          Home
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyle} to="/hacking">
          Projects
        </Link>
      </li>
      {/* <li>
        <Link activeStyle={activeStyle} to="/scribbling">
          Scribbles
        </Link>
      </li> */}
      <li>
        <Link activeStyle={activeStyle} to="/looking-for-work">
          Résumé
        </Link>
      </li>
    </ul>
  </Wrapper>
);

export default Nav;
