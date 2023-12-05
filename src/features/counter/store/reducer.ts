import { DECREMENT, INCREMENT, RESET } from './constants';
import { CounterAction } from './actions';

export type CounterState = number;

const initialState = 0;

export const counterReducer = (state = initialState, action: CounterAction): CounterState => {
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
