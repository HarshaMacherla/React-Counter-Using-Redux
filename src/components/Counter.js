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

  const handleIncrementByTwo = () => {
    dispatch({ type: "INCREMENTBY2" });
  };

  const handleDecrementByTwo = () => {
    dispatch({ type: "DECREMENTBY2" });
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
        <button onClick={handleIncrementByTwo}>Increment By 2</button>
        <button onClick={handleDecrementByTwo}>Decrement By 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
