import "./App.css";
import List from "./components/list";
import Btn from "./components/button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my beginning of a project</h1>
        <Btn count={count} setCounter={setCount} />
        <Btn count={count} setCounter={setCount} />
        <List />
      </header>
    </div>
  );
}

export default App;
