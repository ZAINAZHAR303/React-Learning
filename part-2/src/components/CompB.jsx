import React, { useRef } from 'react'

export const CompB = ({onclose}) => {
    const modelref = useRef();
    const closeMOdel =(e)=>{
        if(modelref.current === e.target){
            onclose()
        }
    }
   
  return (

    <div ref={modelref} onClick={closeMOdel} className='h-screen w-screen fixed inset-0 flex items-center justify-center  '>
        <div className='h-[300px] w-[300px] bg-yellow-400'>
    hello world
        </div>
    </div>
  )
}
export default CompB;