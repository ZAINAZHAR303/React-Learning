import React, { Component } from "react";

class LifeCycleComponentA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sachin",
    };
    console.warn("LifeCycleComponentA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.warn("LifeCycleComponentA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.warn("LifeCycleComponentA componentDidMount");
  }
  render() {
    console.warn("LifeCycleComponentA render");
    return (
      <div>
        <div>LifeCycleComponentA render</div>
      </div>
    );
  }
}

export default LifeCycleComponentA;
