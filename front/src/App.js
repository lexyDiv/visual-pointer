import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { addContext, mashtaber } from "./logic";
import UnderState from "./logic/underState";

function App() {
  const [state, setState] = useState(null);

  const canvas = useRef(null);

  useEffect(() => {
    addContext(canvas.current);
    setState(new UnderState());
  }, [canvas]);


  return (
    <div className="App">
      <canvas
        onResize={() => {
          console.log("here");
        }}
        ref={canvas}
        id="canvas"
        width={1000}
        height={800}
        onWheel={(e) => {
          const { deltaY } = e;
          mashtaber(deltaY);
        }}
      ></canvas>
    </div>
  );
}

export default App;
