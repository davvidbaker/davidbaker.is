import { legacy_createStore } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension'
// import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {
  whoa: {
    normatives: [],
  },
  sideBarVisible: false,
};

export const initStore = (initialState = initialState) => {
  return legacy_createStore(rootReducer, initialState, /* devToolsEnhancer() */);
};

export default initStore;
