import { useReducer } from "react";

// lazy initialization function for useStateCustom
const init = (initial) => {
  if (typeof initial === "function") {
    return initial();
  }
  return initial;
};

const useStateCustom = (initialValue) => {
  const reducer = (state, action) => {
    console.log({ state, action });
    if (typeof action === "function") {
      return action(state);
    }
    return action;
  };

  const [state, dispatch] = useReducer(reducer, initialValue, init); // init function's argument is the 2nd argument of useReducer

  const setState = (newValue) => {
    dispatch(newValue);
  };

  return [state, setState];
};

export const CustomCounter = () => {
  const [count, setCount] = useStateCustom(0);
  const [data, setData] = useStateCustom(() => {
    console.log("Expensive computation");
    return Array.of(100).fill(0);
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount((prev) => prev + 10)}>
        Increment with function
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
