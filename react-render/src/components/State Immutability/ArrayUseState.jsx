import React, { useState } from 'react'

const ArrayUseState = () => {
    let Array = ["hello","world"]

    const[array,setArray] = useState(Array)
    const HandleArray=()=>{
        let newArray = [...Array]
        newArray.push("newword")
        newArray.push("newhello")
        setArray(newArray)
    }
    console.log("Arraystate renders")
  return (
    <div>
      <button onClick={HandleArray}>click</button>
      <div>{array}</div>
    </div>
  )
}

export default ArrayUseState
