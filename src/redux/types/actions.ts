import { Action } from 'redux';

export type ReduxAction = Action & {
  payload: any;
};
