

import Counter from "./components/Counter";
import Posts from "./components/Posts";
import ProductCounter from "./components/ProductCounter";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductCounterPractice from "./components/ProductCounterPractice";
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductCounter />} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/counter" element={<ProductCounterPractice/>} />
        </Routes>
       
      </div>
      </BrowserRouter>
  
  );
}

export default App;
