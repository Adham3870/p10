
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter Application</h1>

      <h2>You clicked the button {count} times</h2>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
