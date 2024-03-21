import React from 'react'

const ChildB = ({count,increment}) => {
  return (
    <div>
    <h2>Child Component B</h2>

    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
  )
}

export default ChildB