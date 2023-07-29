import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncrease = (value) => {
    dispatch(counterActions.increase(value));
  };

  const handleDecrease = (value) => {
    dispatch(counterActions.decrease(value));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterValue}</div>}
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
