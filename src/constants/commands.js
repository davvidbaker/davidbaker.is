import {
  CLEAR,
  COMMAND_RUN,
  CURRENT_POST_SET,
  NORMATIVE_ADD,
  REDACTIONS_SHOW,
  REDACTIONS_HIDE,
  SIDE_BAR_SHOW,
  SIDE_BAR_HIDE,
} from '../state/actions';

export default [
  { action: REDACTIONS_SHOW, copy: 'show redactions 🕵' },
  { action: REDACTIONS_HIDE, copy: 'hide redactions 🕵' },
];
