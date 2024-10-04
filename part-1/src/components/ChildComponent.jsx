import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.GreekHandler("child")}> Greet Parent</button>
    </div>
  )
}

export default ChildComponent
