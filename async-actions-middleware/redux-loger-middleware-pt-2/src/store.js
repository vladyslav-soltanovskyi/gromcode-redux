import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { usersReducer } from './users/users.reducer';
import thunk from "redux-thunk";

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
}

const reducers = combineReducers({
  users: usersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;