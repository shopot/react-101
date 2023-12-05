import { createStore } from 'redux';

// action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

//store
const store = createStore(reducer);

const logState = () => console.log(store.getState().toString());

store.subscribe(logState);

store.dispatch({ type: '' });
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
