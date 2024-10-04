import React from 'react'

function FunctionClick() {
    function ButtonClicked(){
        console.log("button clicked")
    }
  return (
    <div>
      <button onClick={ButtonClicked}>click</button>
    </div>
  )
}

export default FunctionClick