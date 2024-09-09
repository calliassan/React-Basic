import React, { useState } from "react";
export const FuncCounter2 = (props) => {
  console.log(props);
  const [count, setCount] = useState(0);
  const [name, setName] = useState(props.name);

  return (
    <div>
      <h1>Countername: {name}</h1>
      {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
