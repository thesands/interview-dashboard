import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <p
      onClick={() => {
        setCount(count + 1);
      }}>
      {count} 2 3 4!
    </p>
  );
};

export default Counter;
