import React from 'react';
import styled from 'styled-components';

import NormativesList from './whoa/NormativesList';

const sideBarTransitionTime = 0.5;

const Div = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 300px;
  max-width: 300px;
  background: #fafafa;
  left: 0;
  transition: left ${sideBarTransitionTime}s;
  border-right: 1px solid #ededed;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  justify-content: flex-start;

  .arrow-container {
    position: sticky;
    bottom: 0;
    text-align: center;
    background: #fafafa;
    border-top: 1px solid #ccc;
     {
      /*display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;*/
    }
  }
  .arrow {
    border: 0;
    margin: 50px auto;
    padding: 0;
    height: 50px;
    width: 60%;
    position: relative;
    transform-origin: center center;
    transform: scale(0.5);
    background: #ccc;
    cursor: pointer;
  }

  .arrow::before {
    content: '';
    /* background: #ccc; */
    width: 0;
    height: 0;
    position: absolute;
    top: -25px;
    left: -20%;
    border-right: 50px solid #ccc;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    cursor: pointer;
  }

  .arrow:focus {
    outline: 0;
  }

  .arrow:hover {
    background: darkgray;
  }
  .arrow:hover::before {
    border-right-color: darkgray;
  }
`;

const SideBar = ({ sideBarVisible, toggleSideBar }) => (
  <Div style={{ left: sideBarVisible ? '0px' : '-300px' }}>
    <NormativesList />

    <div className="arrow-container">
      <button
        className="arrow"
        onClick={() => {
          toggleSideBar(true);
        }}
      />
    </div>
  </Div>
);

export default SideBar;
