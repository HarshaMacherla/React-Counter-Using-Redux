import { useState } from "react";
import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter);

  const [showCounterValue, setShowCounterValue] = useState(false);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleIncrease = (value) => {
    dispatch({ type: "INCREASE", value });
  };

  const handleDecrease = (value) => {
    dispatch({ type: "DECREASE", value });
  };

  const toggleCounterHandler = () => {
    setShowCounterValue((prev) => !prev);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!showCounterValue && (
        <div className={classes.value}>-- COUNTER VALUE --</div>
      )}
      {showCounterValue && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => handleIncrease(2)}>Increment By 2</button>
        <button onClick={() => handleDecrease(2)}>Decrement By 2</button>
        <button onClick={() => handleIncrease(5)}>Increment By 5</button>
        <button onClick={() => handleDecrease(5)}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
