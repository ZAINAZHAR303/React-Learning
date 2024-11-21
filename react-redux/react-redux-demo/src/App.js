
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "./store/slices/productSlice";
function App() {
  const products = useSelector(store => store.productSlice.products)
  const counter = useSelector(store => store.counterSlice.value)
  const dispatch = useDispatch();
  console.log("products in comp", products)


  const onClickGetProducts = ()=>{
    dispatch(fetchProducts())
  }
  return (
    
      <div className="App">
        <button onClick={onClickGetProducts}>GEt products</button>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch({type:"counter/increment"})} >increment</button>
        <button onClick={()=>dispatch({type:"counter/decrement"})} >decrement</button>
        <button onClick={()=>dispatch({type:"counter/reset"})} >reset</button>

      </div>
  
  );
}

export default App;
