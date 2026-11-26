import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  useEffect(() => {
    console.log("Count updated");
  }, [count]);

  return (
    <>
      <h3>Counter App</h3>

      <p>{count}</p>

      <button onClick={increase}>Increase</button>

      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default Counter;
