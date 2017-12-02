/**
*
* Ellipsis
*
*/

import React from 'react';

function Ellipsis({ children }) {
  console.log('children', children);
  return <span>...ELLIPSIS</span>;
}

Ellipsis.propTypes = {};

export default Ellipsis;
