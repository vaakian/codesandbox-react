import { useEffect, useRef, useState } from "react";
import "./styles.css";
import Index from "./Home/Index";

export default function App() {
  const ref = useRef();
  console.log("beforeCreate");
  useEffect(() => {
    console.log("after", ref);
  });
  const [state, setState] = useState(1);
  const increment = () => setState((p) => p + 1);
  return (
    <div className="App">
      <Index />
      <h1 ref={ref} onClick={increment}>
        {state}
      </h1>
    </div>
  );
}
