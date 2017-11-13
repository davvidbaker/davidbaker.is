import { combineReducers } from 'redux';

import {
  CLEAR,
  COMMAND_RUN,
  CURRENT_POST_SET,
  NORMATIVE_ADD,
  REDACTIONS_SHOW,
  REDACTIONS_HIDE,
  SIDE_BAR_SHOW,
  SIDE_BAR_HIDE,
} from '../actions';

export const sideBarReducer = (state = false, action) => {
  switch (action.type) {
    case SIDE_BAR_SHOW:
      return true;

    case SIDE_BAR_HIDE:
      return false;

    default:
      return state;
  }
};

const normatives = (state = [], action) => {
  switch (action.type) {
    case NORMATIVE_ADD:
      return [...state, { id: action.id, statement: action.statement }];
    case CLEAR:
      return [];
    default:
      return state;
  }
};

const currentPost = (state = null, action) => {
  switch (action.type) {
    case CURRENT_POST_SET:
      return action.title;
    case CLEAR:
      return null;
    default:
      return state;
  }
};

const redactionsVisible = (state = false, action) => {
  switch (action.type) {
    case REDACTIONS_SHOW:
      return true;
    case REDACTIONS_HIDE:
      return false;
    default:
      return state;
  }
};

const whoaReducer = combineReducers({
  normatives,
  currentPost,
  redactionsVisible,
});

const rootReducer = combineReducers({
  whoa: whoaReducer,
  sideBarVisible: sideBarReducer,
});

export default rootReducer;
