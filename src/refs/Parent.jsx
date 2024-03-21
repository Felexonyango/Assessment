import React, { useRef } from 'react';

import ChildComponent from './Child';

const ParentComponent = () => {
   
    const childRef = useRef(null);
  
    // Function to handle button click
    const focusInput = () => {
      // Accessing child component method through ref
      childRef.current.focusInput();
    };
  
    return (
      <div>
        {/* Child component with ref */}
        <ChildComponent ref={childRef} />
  
        {/* Button to trigger focus on the input */}
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  };
  
  export default ParentComponent;