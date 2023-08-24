// 1. Node modules
import { useState } from "react";

// 2. Project file
import AlertSystem from "./components/AlertSystem";
import Counter from "./components/Counter";
import "./style/style.css";

// Functionl Component (FC) with 1 line export shorcut
export default function App() {
  // 3. Global state
  // Not used in this file

  // 4. Local state
  const [name, setName] = useState("Eduardo");
  const [hideCounter, setHideCounter] = useState(false);

  // 5. Properties
  // Not used in this file

  // 6. Methods
  // Not used in this file

  // 7. Render
  return (
    <div className="App">
      <h1>Welcome to BE2 React Getting Started</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias
        beatae suscipit minus voluptates? Doloribus voluptate quia assumenda
        debitis explicabo iste exercitationem magnam aut quasi. Totam cum
        mollitia repudiandae voluptatum!
      </p>
      <button onClick={() => setHideCounter(!hideCounter)}>
        Toggle counter
      </button>
      {!hideCounter && <Counter name={name} />}
      {/* Props 1/2: To pass a prop, assign it a name and a value */}
      <AlertSystem nameState={[name, setName]} />
    </div>
  );
}
