import logo from "./logo.svg";
import "./App.css";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundry from "./components/ErrorBoundry";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import RenderProps from "./components/RenderProps";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";
import ComponentF from "./components/ComponentF";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      {/* <UserProvider value="ali">
        <ComponentC  />
      </UserProvider> */}

        {/* <ComponentC name="vishwas"/> */}
        {/* <ClickCounter /> */}

        <Button />



      {/* <RenderProps
        name={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}



    </div>
  );
}

export default App;
