// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions';
import type { Action } from '../types';

export default function reducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}