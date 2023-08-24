export default function AlertSystem() {
  // Properties
  const name = "Eduardo";

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
      {/* Show state or properties on the screen by using {} */}
      {/* Tip: Put @@ between your {} to debug */}
      <p>Name: @{name}@</p>

      {/* Basic event listener: for a function without parameters */}
      <button onClick={showAlertBasic}>Alert basic</button>

      {/* Advanced event listener advanced: for functions with one or more parameters */}
      <button onClick={() => showAlertAdvanced("Olga")}>Alert advanced</button>
    </div>
  );
}
