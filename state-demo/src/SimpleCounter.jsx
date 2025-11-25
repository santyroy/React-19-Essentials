import { useState } from "react";

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  console.log("Render Phase: Component rendering with count: ", count);

  const handleClick = () => {
    // console.log("Before setCount: ", count);
    // setCount(count + 1);
    // console.log("Still in trigger phase. After setCount: ", count);

    /*
        Multiple state update in a row:
        Throughout the trigger phase, our snapshot of state is 0 and we're only queueing updates
            - setCount(0 + 1) will queue an update to 1
            - setCount(0 + 5) will queue an update to 5
            - setCount(0 + 10) will queue an update to 10
        The last update wins, and only when the render phase happens does count actually becomes 10
    */
    setCount(count + 1);
    console.log("After setCount(count + 1), count is = ", count);
    setCount(count + 5);
    console.log("After setCount(count + 5), count is = ", count);
    setCount(count + 10);
    console.log("After setCount(count + 10), count is = ", count);
    setTimeout(() => {
      console.log("After 2 seconds count is = ", count);
      // this also will show 0, because the callback was run during trigger phase where a snapshot of state was taken
    }, 2000);
  };

  return (
    <div>
      <h2>{count}</h2>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
