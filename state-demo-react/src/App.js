import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <main>
        <h1>Using States in React</h1>
        <p>{counter}</p>
        <button onClick={incrementCounterHandler}>Increment</button>
      </main>
    </div>
  );
}

export default App;
