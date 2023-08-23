/**
 * # React Getting Started
 * ## Rules:
 * 1. Cleanup files (delete stuff you don't use)
 * 2. Rename JavaScript files that are React components from .js to .jsx
 * 3. One function per .jsx file and... make one line export
 * 4. In React do not work with variables to update infomration on the screen. Utilize "state" instead.
 *
 * ## Anatomy of a React .jsx component
 * 1. Node modules: Imports from the node_modules/ folder.
 * 2. Project files: Imports from the src/ folder.
 * 3. Global state: Data that needs to be updated on the browser that exist globally in the project.
 * 4. Local state: Data that needs to be updated on the browser that exist only inside a Functional Component (FC)
 * 5. Properties: Data that does not be updated on the web browser. For internal use only.
 * 6. Methods: The functions inside the Functional Component (FC)
 * 7. Render: The information sent to display on the web browser.
 *
 * Definitions:
 * 1. Event listener: Act uppon an action on a button, formulary, select box, checkbox, etc.
 * 2. State: A fancy term to say to the React framework, that a piece data (variable, components, json, etc) should update the screen.
 */

// 1. Node modules
import { useState } from "react";

// 2. Project file
import logo from "./assets/logo.svg";

// Functionl Component (FC) with 1 line export shorcut
export default function App() {
  // 3. Global state
  // pending...

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
    // String interpolation (Java Formatter)
    alert(`Welcome ${name} to BE2 lectures`);
  }

  // 7. Render
  return (
    <div className="App">
      <h1>Welcome to BE2 React Getting Started</h1>
      <p>Name: @{name}@</p>
      <p>Counter: @{counter}@</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias
        beatae suscipit minus voluptates? Doloribus voluptate quia assumenda
        debitis explicabo iste exercitationem magnam aut quasi. Totam cum
        mollitia repudiandae voluptatum!
      </p>

      {/* Event listener basic: for a function withouth parameters */}
      <button onClick={increaseCounter}>Increase counter</button>
      <button onClick={showAlertBasic}>Alert basic</button>

      {/* Event listener advanced: for functions with one or more parameters */}
      <button onClick={() => showAlertAdvanced("Olga")}>Alert advanced</button>
    </div>
  );
}
