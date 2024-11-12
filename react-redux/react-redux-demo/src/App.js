import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./components/redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
    </Provider>
  );
}

export default App;
