import { createStore } from 'redux'
import { reducers } from './reducers';

export const initializeStore = () => {
  return createStore(reducers, {})
};
