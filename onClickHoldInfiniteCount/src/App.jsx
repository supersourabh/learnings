import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const interval = useRef(null);

  const onMouseDown = (e, event) => {
    interval.current = setInterval(() => {
      if (event == "up") {
        setCount((prevCount) => prevCount + 1);
      } else {
        setCount((prevCount) => prevCount - 1);
      }
    }, 100);
    console.log(interval);
  };

  const clearIntervalFn = (e) => {
    clearInterval(interval.current);
  };

  return (
    <>
      <div>
        <h1>Counter</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            onMouseDown={(e) => onMouseDown(e, "down")}
            onMouseUp={clearIntervalFn}
            onMouseLeave={clearIntervalFn}
          >
            -
          </button>
          <p> {count} </p>
          <button
            onMouseDown={(e) => onMouseDown(e, "up")}
            onMouseUp={clearIntervalFn}
            onMouseLeave={clearIntervalFn}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
