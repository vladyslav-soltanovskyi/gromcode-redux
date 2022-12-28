import React from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "./counter.actions";

const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>-</button>
      <span className="counter__value" onClick={reset}>{counter}</span>
      <button className="counter__button" onClick={increment}>+</button>
    </div>
  );
}

const mapState = (state) => ({ counter: state });

const mapDispatch = (dispatch) => ({ 
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset())
})

const connetor = connect(mapState, mapDispatch);

export default connetor(Counter);
