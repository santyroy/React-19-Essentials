import { useState } from "react";

export const PrevStateCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Render Phase: Component rendering with count: ", count);

  const handleClick = () => {
    setCount((prev) => {
      console.log("First updater function: prev count = ", prev);
      return prev + 1;
    });
    console.log("After setCount(prev = prev + 1), count is = ", count);
    setCount((prev) => {
      console.log("Second updater function: prev count = ", prev);
      return prev + 5;
    });
    console.log("After setCount((prev) => prev + 5), count is = ", count);
    setCount((prev) => {
      console.log("Third updater function: prev count = ", prev);
      return prev + 10;
    });
    console.log("After setCount((prev) => prev + 10), count is = ", count);
    setTimeout(() => {
      console.log("After 2 seconds count is = ", count);
      // this also will show 0, because the callback was run during trigger phase where a snapshot of state was taken
    }, 2000);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
