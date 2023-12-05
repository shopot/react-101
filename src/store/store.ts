import { createStore, Store, compose, AnyAction, combineReducers, applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { counterReducer } from '@/features/counter';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Infer the `RootState` type from the all reducers

type RootState = {
  counter: ReturnType<typeof counterReducer>;
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store: Store<RootState> & {
  dispatch: ThunkDispatch<RootState, null, AnyAction>;
} = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// Infer the `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
