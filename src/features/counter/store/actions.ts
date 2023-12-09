import { DECREMENT, INCREMENT, RESET } from './constants';
import { CounterDispatch } from './types';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

export const resetAsync = () => {
  return (dispatch: CounterDispatch) => {
    // To do something
    return setTimeout(() => {
      dispatch(reset());
    }, 500);
  };
};
