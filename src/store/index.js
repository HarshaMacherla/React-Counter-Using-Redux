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

    case "INCREMENTBY2":
      return {
        counter: state.counter + 2,
      };

    case "DECREMENTBY2":
      return {
        counter: state.counter - 2,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer, {
  counter: 0,
});

export default store;
