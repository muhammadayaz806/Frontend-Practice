import { useState } from "react";
import Button from "./Button.jsx";
import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.div}>
      <h1>Counter Project</h1>
      <h2>Current Value: {count}</h2>
      <Button onClick={increment} text="Increment" />
      <Button onClick={decrement} text="Decrement" />
      <Button onClick={reset} text="Reset Value" />
    </div>
  );
}
