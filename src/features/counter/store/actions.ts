import { DECREMENT, INCREMENT, RESET } from './constants';
import { CounterDispatch } from './types';

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
