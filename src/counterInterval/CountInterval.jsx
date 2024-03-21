import React, { useEffect, useState } from "react";
const CountInterval = () => {
  const [count, setCount] = useState(0);
  const [iscount, setIsCount] = useState(false);

  useEffect(() => {
    if (!iscount) {
      const setIntervalId = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => {
        console.log("clear  interval");
        clearInterval(setIntervalId);
      };
    }
  }, [count, setIsCount]);
  //dependency array  make useEffect hook run on each render

  const handleResetCount = () => {
    setCount(0);
  };
  const handleStopCount = () => {
    setIsCount(false);
  };

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>start</button> */}
      <button onClick={handleStopCount}>stop</button>
      <button onClick={handleResetCount}>Reset</button>
      <h1>{count}</h1>
    </div>
  );
};
export default CountInterval;
