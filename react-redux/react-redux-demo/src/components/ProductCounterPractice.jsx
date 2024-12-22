import React from 'react'
import{useSelector,useDispatch} from "react-redux"
import { increment,decrement,reset,incrementByAmount} from "../store/slices/counterSlice"
const ProductCounterPractice = () => {
    const dispatch = useDispatch()
    const value = useSelector((store)=>store.counterSlice.value)
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <button onClick={()=>dispatch(incrementByAmount(5))}>increment by amount</button>
    </div>
  )
}

export default ProductCounterPractice
