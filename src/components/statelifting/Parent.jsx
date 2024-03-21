import React,{ useState } from 'react'

import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent = () => {
    const [count, setCount] = useState(0)

    const incrementCount=()=>{
      setCount(prevCount => prevCount + 1);
    }
  
  
    return (
      <>
      
      <ChildA  count={count} increment={incrementCount} />
      <ChildB count={count} increment={incrementCount} />
      
      
      
      
      </>
    )
}

export default Parent