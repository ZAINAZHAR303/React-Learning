import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: "hello",
    };
    this.ClickEvent = this.ClickEvent.bind(this); // offical documentetion approach?
  }
  ClickEvent() {
    this.setState({
      Message: "goodbye!",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.Message}</div>
        {/* <button onClick={() => this.ClickEvent()}>click</button> */}
        <button onClick={this.ClickEvent}>click</button>
      </div>
    );
  }
}

export default EventBinding;
