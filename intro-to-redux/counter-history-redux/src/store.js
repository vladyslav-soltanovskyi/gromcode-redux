import { createStore } from 'redux';

const initialState = {
  counter: 0,
  history: []
}

const INCREMENT =  'COUNTER/INCREMENT';
const DECREMENT =  'COUNTER/DECREMENT';
const RESET =  'COUNTER/RESET';

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const reset = () => ({ type: RESET });

export const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT: {
      const { counter, history } = state;
      return { ...state, counter: counter + 1, history: [...history, '+1'] };
    }
    case DECREMENT: {
      const { counter, history } = state;
      return { ...state, counter: counter - 1, history: [...history, '-1'] };
    }
    case RESET: {
      return { counter: 0, history: [] };
    }
    default: 
      return state;
  }
}

export const store = createStore(counterReducer);