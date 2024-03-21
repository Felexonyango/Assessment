

import React, { useRef, forwardRef, useImperativeHandle } from 'react';

// Child component using forwardRef
const ChildComponent = forwardRef((props, ref) => {
  // Accessing the ref
  const inputRef = useRef(null);

  // Expose focusInput method to parent component
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));

  return <input type="text" ref={inputRef} />;
});

export default ChildComponent
