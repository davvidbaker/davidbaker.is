import React from 'react';
import styled from 'styled-components';

import notepad from '../icons/notepad.svg';

const Wrapper = styled.header`
  z-index: 10;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  @media (min-width: 60rem) {
    & {
      position: sticky;
      top: 0;
    }
  }

  li {
    padding: 10px;
  }

  button {
    display: flex;
    border-style: none;
    background: unset;
    font-size: 3rem;
    cursor: pointer;
    align-items: center;
    padding: 0;
  }
  button:focus {
    outline: none;
  }
  button:hover {
    transform: scale(1.05);
  }
`;

const Header = ({ show, hide, sideBarVisible, toggleSideBar }) => (
  <Wrapper>
    <ul>
      <li>
        <button
          onClick={() => {
            toggleSideBar(sideBarVisible);
          }}
        >
          <img src={notepad} alt="🗒️" />
        </button>
      </li>
    </ul>
  </Wrapper>
);

export default Header;
