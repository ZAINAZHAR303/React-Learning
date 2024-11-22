
import "./App.css";
import Posts from "./components/Posts";
import ProductCounter from "./components/ProductCounter";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductCounter />} />
          <Route path="/posts" element={<Posts/>} />
        </Routes>
       
      </div>
      </BrowserRouter>
  
  );
}

export default App;
