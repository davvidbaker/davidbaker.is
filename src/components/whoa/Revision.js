import shortid from 'shortid'
import React from 'react'

import Element from './Element'
import Popup from '../Popup'
import WithToggle from '../WithToggle'

const Revision = ({ children, popupOpen, show, hide }) => {
  const length = children.length

  // if (length === 1) {
  //   return 'foobar';
  // }
  if (length === 1) {
    return (
      <span className="revision">
        <Element type={children[0].type} {...children[0]}>
          {children[0].children}
        </Element>
        <style jsx>{`
          span {
            text-decoration: underline wavy rgba(255, 0, 0, 0.3);
          }
        `}</style>
      </span>
    )
  }
  return (
    <span
      className="revision"
      onClick={() => (popupOpen ? hide() : show())}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <Element type={children[0].type} {...children[0]}>
        {children[0].children}
      </Element>
      {popupOpen && <Popup>{children[1]}</Popup>}
      <style jsx>{`
        .revision {
          text-decoration: underline wavy rgba(255, 0, 0, 0.7);
        }
      `}</style>
    </span>
  )
}

export default WithToggle('popupOpen')(Revision)
