import { createStore, combineReducers, applyMiddleware } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension'
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {
  whoa: {
    normatives: [],
  },
  sideBarVisible: false,
};

const initStore = (initialState = initialState) => {
  return createStore(rootReducer, initialState, devToolsEnhancer());
};

export default initStore;
