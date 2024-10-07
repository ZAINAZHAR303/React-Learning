import React from 'react'

function Hero({name}) {
    if(name==="joker"){
        throw new Error("not a hero");
    }
  return (
    <div className='bg-blue-500 p-4'>
      {name}
    </div>
  )
}

export default Hero
    