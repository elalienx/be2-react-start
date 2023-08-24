// Props 2/2: To receive the prop do this
export default function AlertSystem({ nameState }) {
  const [name, setName] = nameState;

  // Methods
  function showAlertBasic() {
    alert("Welcome to BE2 lectures");
  }

  function showAlertAdvanced(name) {
    // String interpolation equivalent to Java Formatter.
    alert(`Welcome ${name} to BE2 lectures`);
  }

  // Render
  return (
    <div className="alert-system">
      <h2>Alert System 🚨</h2>
      {/* Input field: You need to pass the getter and setter. value = getter, onChange = setter */}
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />

      {/* Basic event listener: for a function without parameters */}
      <button onClick={showAlertBasic}>Alert basic</button>

      {/* Advanced event listener advanced: for functions with one or more parameters */}
      <button onClick={() => showAlertAdvanced(name)}>Alert advanced</button>
    </div>
  );
}
