import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer } from './counter/counter.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
}

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;