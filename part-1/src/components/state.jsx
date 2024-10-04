import react, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      Message: "welcome viewer",
    };
  }
  changeMessage() {
    this.setState({
      Message: "thanks for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={()=>this.changeMessage()}>subscribe</button>
      </div>
    );
  }
}

export default State;
