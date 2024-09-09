import React, { useState } from "react";
export const Funcounter3 = (props) => {
  const [count, setCount] = useState(0);
  const [Name, setName] = useState(props.Name);

  const handleDecrement = () => {
    setCount(count - props.diff);
  };

  const handleIncrement = () => {
    setCount(count + props.diff);
  };

  return (
    <div className="center">
      <h2>Hello, {Name}</h2>
      <h1 className={count < 0 ? "Negative" : "Positive"}>{count}</h1>
      <button onClick={handleIncrement}>+{props.diff}</button>
      <button onClick={handleDecrement}>-{props.diff}</button>
    </div>
  );
};
