// Node module
import { useState } from "react";

export default function Counter() {
  // Local state (See example in Readme.md file)
  const [count, setCount] = useState(0);

  // Methods
  function increaseCount() {
    setCount(count + 1);

    // For debugging
    console.log("The counter is", count);
  }

  // Render
  return (
    <div className="counter">
      {/* Show state or properties on the screen by using {} */}
      {/* Tip: Put @@ between your {} to debug */}
      <p>Counter: @{count}@</p>

      {/* Basic event listener: for a function without parameters */}
      <button onClick={increaseCount}>Increase counter</button>
    </div>
  );
}
