import React from 'react'

function IndexAsArray() {
    const names = ['John', 'Jane', 'Bob', 'Alice']
  return (
    <div>
      {names.map((element,index) => <h2 key={index}>{element}</h2>)}
    </div>
  )
}

export default IndexAsArray
