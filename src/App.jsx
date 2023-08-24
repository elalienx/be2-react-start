// 1. Node modules
import { useEffect, useState } from "react";

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
  const [item, setItem] = useState({});

  // 5. Properties
  const endpoint = "https://jsonplaceholder.typicode.com/todos/1";

  // 6. Methods
  /**
   * useEffect = Constructor in Java
   *
   * Example Java:
   * class App{
   *    public App() {
   *      // code to run at creation time
   *    }
   * }
   */
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(result) {
    console.log(result);
    setItem(result);
  }

  function onFailure(error) {
    alert("Sorry we could not load the data");
    console.error(error);
  }

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
      <ul className="item">
        <li>Id: {item.id}</li>
        <li>Name: {item.title}</li>
        <li>Status: {item.completed ? "Yes" : "No"} </li>
      </ul>

      <Counter name={name} />
      {/* Props 1/2: To pass a prop, assign it a name and a value */}
      <AlertSystem nameState={[name, setName]} />
    </div>
  );
}
