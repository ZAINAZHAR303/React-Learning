import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./components/redux/store";
import { fetchProducts } from "./store/slices/productSlice";
function App() {
  const products = useSelector(store => store.productSlice.products)
  const dispatch = useDispatch();
  console.log("products in comp", products)

  const onClickGetProducts = ()=>{
    dispatch(fetchProducts())
  }
  return (
    
      <div className="App">
        <button onClick={onClickGetProducts}>GEt products</button>
      </div>
  
  );
}

export default App;
