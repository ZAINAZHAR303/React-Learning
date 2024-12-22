import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../store/slices/counterSlice";
const Counter = () => {
  const counter = useSelector((store) => store.counterSlice.value);
    const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const setvalue = Number(incrementAmount) || 0;

  const resetAll = () => {
    console.log("Before reset:", counter);
    setIncrementAmount(0);
    dispatch(reset());
    console.log("After reset:", counter);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(setvalue))}>
          incrementbyAmount
        </button>
        <button onClick={resetAll}>Reset All</button>
      </div>
    </div>
  );
};

export default Counter;
