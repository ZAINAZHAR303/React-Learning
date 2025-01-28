import React, { useState } from 'react'

function Buttons() {

    const[increment,setincrement] = useState(0)

    const handleClick = ()=>{
        setincrement()
    }
  return (
    <div>
        <button onClick={setincrement((prev)=>prev+1)}>click me!</button>
    </div>
  )
}

export default Buttons