import "./App.css";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { SimpleCounter } from "./SimpleCounter";

/* 
How state update works:
Updating the UI is a 3-phase process:
1. the trigger phase - 
      This happens the moment you call a setter function like setCount(). 
      You are not updating the UI yet.
      React puts this component in a list of components which need to re-run
2. the render phase -
      This is when the component is re-runs the function
      Re-running the function doesn't immediately change what's on screen
3. the commit phase -
      React takes the changes it calculated in render phase and applies to the DOM
*/

function App() {
  return (
    <>
      <h1>Codevolution React Course</h1>
      {/* <Counter /> */}
      {/* <Counter /> */}
      {/* <LoginCard /> */}
      <SimpleCounter />
    </>
  );
}

export default App;
