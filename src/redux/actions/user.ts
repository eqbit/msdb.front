import { Action } from 'redux';
import { SET_USER_LOGGED_STATUS } from '../constants';

interface SetUserLoggedStatus extends Action {
  payload: boolean
}

export const setUserLoggedStatus = (status: boolean): SetUserLoggedStatus => {
  return {
    type: SET_USER_LOGGED_STATUS,
    payload: status
  }
};
