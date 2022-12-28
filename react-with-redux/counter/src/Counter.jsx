import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "./counter.actions";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>-</button>
      <span className="counter__value">{counter}</span>
      <button className="counter__button" onClick={increment}>+</button>
    </div>
  );
}

const mapState = (state) => ({ counter: state });

const mapDispatch = (dispatch) => ({ 
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

const connetor = connect(mapState, mapDispatch);

export default connetor(Counter);
