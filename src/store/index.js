import { createStore } from "redux";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };

    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };

    case "INCREASE":
      return {
        counter: state.counter + action.value,
      };

    case "DECREASE":
      return {
        counter: state.counter - action.value,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer, {
  counter: 0,
});

export default store;
