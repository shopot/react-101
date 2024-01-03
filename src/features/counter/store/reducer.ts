import { DECREMENT, INCREMENT, RESET } from './constants';
import type { CounterAction, CounterState } from './types';

const initialState = 0;

export const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT: {
      return state + 1;
    }

    case DECREMENT: {
      return state - 1;
    }

    case RESET: {
      return 0;
    }

    default: {
      return state;
    }
  }
};
