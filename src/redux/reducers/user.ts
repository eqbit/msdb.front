import { SET_USER_LOGGED_STATUS } from '../constants';
import { ReduxAction } from '../types';

const initialState = {
  isLoggedIn: false
};

export const userReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case SET_USER_LOGGED_STATUS: {
      return {
        ...state,
        isLoggedIn: action.payload
      }
    }
    default:
      return state
  }
};
