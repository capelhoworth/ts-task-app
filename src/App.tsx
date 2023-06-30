import React from "react";
import "./App.css";

interface Person {
  name: string;
  age?: number;
}

type X = Person & {
  a: string;
  b: number;
};

function App() {
  return <div className="App">Hello World!</div>;
}

export default App;
