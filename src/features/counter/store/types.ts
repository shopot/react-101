import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { DECREMENT, INCREMENT, RESET } from './constants';

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
export type CounterState = number;
export type CounterAction = Increment | Decrement | Reset;

// Required for actions dispatch
export type CounterDispatch = ThunkDispatch<{ counter: CounterState }, null, AnyAction>;
