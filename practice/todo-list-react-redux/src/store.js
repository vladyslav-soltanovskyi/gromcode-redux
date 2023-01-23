import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import tasksReducer from './tasks/tasks.reducer';
import thunk from "redux-thunk";

const reducers = combineReducers({
  tasks: tasksReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;