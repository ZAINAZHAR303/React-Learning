import React, { useCallback, useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0)
    console.log("state render")
  return (
    <div>
      <button   onClick={()=>setCount(prev=>prev+1)}>count _ {count}</button>
      <button onClick={()=>setCount(0)}>count to 0</button>
      <button onClick={()=>setCount(5)}>count to 5</button>
    </div>
  )
}

export default UseState
