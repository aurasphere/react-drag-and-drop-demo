import './App.css';
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("")
  const [coords, setCoords] = useState({ x: 10, y: 50 })

  const textStyle = { position: "absolute", top: coords.y, left: coords.x };

  const onDragOver = (e) => {
    e.preventDefault();
    setCoords({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <div onDragOver={onDragOver} class="container">
        <div draggable="true" style={textStyle}>
          {text}
        </div>
      </div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </>
  );
}