import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { DECREMENT, INCREMENT, RESET } from './constants';
import { CounterState } from './reducer';

interface Increment {
  type: typeof INCREMENT;
}

interface Decrement {
  type: typeof DECREMENT;
}

interface Reset {
  type: typeof RESET;
}

// Required for reducer
export type CounterAction = Increment | Decrement | Reset;

// Required for actions dispatch
type CounterDispatch = ThunkDispatch<{ counter: CounterState }, null, AnyAction>;

export const increment = {
  type: INCREMENT,
};

export const decrement = {
  type: DECREMENT,
};

export const reset = () => {
  return (dispatch: CounterDispatch) => {
    setTimeout(() => {
      dispatch({ type: RESET });
    }, 500);
  };
};
