
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, reset,incrementbyAmount} from "./store/slices/counterSlice";
import { fetchProducts } from "./store/slices/productSlice";
import { useState } from "react";
function App() {
  const products = useSelector(store => store.productSlice.products)
  const counter = useSelector(store => store.counterSlice.value)
  const [incrementAmount,setIncrementAmount] = useState(0);

  const setvalue = Number(incrementAmount) || 0

  const dispatch = useDispatch();
  console.log("products in comp", products)


  const onClickGetProducts = ()=>{
    dispatch(fetchProducts())
  }
  return (
    
      <div className="App">
        <button onClick={onClickGetProducts}>GEt products</button>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(increment())} >increment</button>
        <button onClick={()=>dispatch(decrement())} >decrement</button>
        <button onClick={()=>dispatch(reset())} >reset</button>
        <div>
          <input type="text" value={incrementAmount} onChange={e=>setIncrementAmount(e.target.value)} />
          <button onClick={() =>dispatch(incrementbyAmount(setvalue))}>incrementbyAmount</button>
        </div>
      </div>

  
  );
}

export default App;
