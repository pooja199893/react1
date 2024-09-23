import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Decrement, Increment, Reset } from "../redux/actions";
<components />
const ReduxCounter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const IncrementCounter = () => {
    dispatch(Increment());
  };
  const DecrementCounter = () => {
    dispatch(Decrement());
  };
  const ResetCounter = () => {
    dispatch(Reset());
  };
  return (
    <div>
      <h1>ReduxCounter</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={IncrementCounter}>INCREMENT</button>
      <button onClick={DecrementCounter}>DECREMENT</button>
      <button onClick={ResetCounter}>RESET</button>
    </div>
  );
};

export default ReduxCounter;