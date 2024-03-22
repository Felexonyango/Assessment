import React, { useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Accessing the DOM node using the ref
    inputRef.current.focus();
  };
  return (
    <div>
      {/* Input element with ref */}
      <input type="text" ref={inputRef} />

      {/* Button to trigger focus on the input */}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default RefExample;
