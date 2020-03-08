import {ADD_REMINDER, REMOVE_REMINDER} from '../constants/strings';

export const add = function(payload) {
  return {
    type: ADD_REMINDER,
    payload,
  };
};

export const remove = function(payload) {
  return {
    type: REMOVE_REMINDER,
    payload,
  };
};
