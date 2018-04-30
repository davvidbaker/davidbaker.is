/**
 * HOC
 */

import { compose, withHandlers, withReducer } from 'recompose';

const WithToggle = toggleProp =>
  compose(
    withReducer(toggleProp, 'dispatch', (state, action) => {
      switch (action.type) {
        case 'SHOW':
          return true;
        case 'HIDE':
          return false;
        default:
          return false;
      }
    }),
    withHandlers({
      show: ({ dispatch }) => event => {
        dispatch({ type: 'SHOW' });
      },
      hide: ({ dispatch }) => event => {
        dispatch({ type: 'HIDE' });
      },
      toggle: ({ dispatch }) => toggledOn => {
        toggledOn ? dispatch({ type: 'HIDE' }) : dispatch({ type: 'SHOW' });
      },
    })
  );

export default WithToggle;
