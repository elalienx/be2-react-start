// 1. Node modules
import { useState } from "react";

// 2. Project file
import logo from "./assets/logo.svg";

// Functionl Component (FC) with 1 line export shorcut
export default function App() {
  // 3. Global state
  // No used in this project

  // 4. Local state
  /**
   * Explanation of React:
   * [counter, setCounter] = [getter, setter] in Java
   * useState(0) = private int counter = 0 (is just that I need a specific React method called useState to initialize the state)
   * (x) = the x can be a number (int), string, boolean, a componenent.
   */
  /**
   * Example in Java:
   * private int counter = 0
   *
   * public getCounter() {
   *    return counter
   * }
   *
   * public setCounter(int newCounter) {
   *    counter = newCounter;
   * }
   */
  const [counter, setCounter] = useState(0);

  // 5. Properties
  const name = "Eduardo";

  // 6. Methods
  function increaseCounter() {
    setCounter(counter + 1);

    // For debugging
    console.log("The counter is", counter);
  }

  function showAlertBasic() {
    alert("Welcome to BE2 lectures");
  }

  function showAlertAdvanced(name) {
    // String interpolation equivalent to Java Formatter.
    alert(`Welcome ${name} to BE2 lectures`);
  }

  // 7. Render
  return (
    <div className="App">
      <h1>Welcome to BE2 React Getting Started</h1>
      {/* Show state or properties on the screen by using {} */}
      {/* Tip: Put @@ between your {} to debug */}
      <p>Name: @{name}@</p>
      <p>Counter: @{counter}@</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias
        beatae suscipit minus voluptates? Doloribus voluptate quia assumenda
        debitis explicabo iste exercitationem magnam aut quasi. Totam cum
        mollitia repudiandae voluptatum!
      </p>

      {/* Basic event listener: for a function without parameters */}
      <button onClick={increaseCounter}>Increase counter</button>
      <button onClick={showAlertBasic}>Alert basic</button>

      {/* Advanced event listener advanced: for functions with one or more parameters */}
      <button onClick={() => showAlertAdvanced("Olga")}>Alert advanced</button>
    </div>
  );
}
