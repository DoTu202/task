import React, { useState } from "react";

//Function Component
const CounterFunction = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid green" }}>
      <h3>Function Component</h3>
      <p>
        Count: <strong>{count}</strong>
      </p>
      <button onClick={increase}>Tăng lên</button>
    </div>
  );
};

export default CounterFunction;
