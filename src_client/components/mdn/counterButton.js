import React from "react";

// created button element and if button clicked, added 1
export default function CounterButton() {
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}