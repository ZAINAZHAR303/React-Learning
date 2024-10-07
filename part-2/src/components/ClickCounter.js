import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";
class ClickCounter extends Component {

  
  render() {
    const { count,IncrementCount } = this.props;
   
    return (
      <div>
        <button
          onClick={IncrementCount}
          className="bg-orange-500 p-2 text-white rounded font-semibold">
           {this.props.name} clicked {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter,7);
