import shortid from 'shortid';
import React from 'react';
import styled from 'styled-components';

import Element from './Element';
import Popup from '../Popup';
import WithToggle from '../WithToggle';

const Span = styled.span`
  text-decoration: underline dashed rgba(255, 0, 0, 0.5);
`;

const Revision = ({ children, popupOpen, show, hide }) => {
  const length = children.length;

  if (length === 1) {
    return (
      <Span>
        <Element type={children[0].type} {...children[0]}>
          {children[0].children}
        </Element>
      </Span>
    );
  }
  return (
    <Span
      className="revision"
      onClick={() => (popupOpen ? hide() : show())}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <Element type={children[0].type} {...children[0]}>
        {children[0].children}
      </Element>
      {popupOpen && <Popup>{children[1]}</Popup>}
    </Span>
  );
};

export default WithToggle('popupOpen')(Revision);
