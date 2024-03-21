import React from 'react'

const ChildA = ({count,increment}) => {

    return (
        <div>
        <h2>Child Component A</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
  )
}

export default ChildA