import {ADD_REMINDER, REMOVE_REMINDER} from '../constants/strings';

const initialState = {
  reminders: ['Electricity Bill', 'Telephone Bill'],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_REMINDER:
      let reminders = state.reminders;
      return Object.assign({}, state, {
        reminders: [...reminders, action.payload],
      });
    case REMOVE_REMINDER:
      let todoItemss = state.reminders;
      todoItemss.splice(action.payload, 1);
      return Object.assign({}, state, {reminders: [...todoItemss]});

    default:
      return state;
  }
}
