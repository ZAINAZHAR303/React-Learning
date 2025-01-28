import React from 'react'
import { useState } from 'react'
import CompB from './CompB';
// import { use } from 'react'

export const Button = () => {
    const [hello,sethello] = useState(false);
  return (
    <div>
        <button onClick={()=>sethello(true)}>helloooo</button>


        {
            hello &&(
                <div>
                <CompB onclose={()=>sethello(false)} />
                </div>
            )
        }
    </div>
  )
}
export default Button;