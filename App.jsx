import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 20 }}>
      <h1>My Custom React App</h1>
      <p>Simple counter built with React + Vite</p>
      <div>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <span style={{ margin: "0 12px" }}>{count}</span>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  );
}
