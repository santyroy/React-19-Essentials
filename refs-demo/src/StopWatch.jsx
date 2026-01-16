import { useRef, useState } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);

  // Refs are used to store values that don't effect the UI but need to persist accross renders
  // - state is for rendering
  // - refs are for remembering
  // We can create a ref using the useRef hook
  // It accepts an initial value and returns an object with a single property called 'current' which hold the value of the ref
  // We can use refs to store values like interval IDs, timeout IDs, previous values, etc.

  // A ref is a way to store a mutable value that
  // - persists accross renders
  // - does not cause a re-render when it changes
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <div>
      <h2>Time: {time}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
