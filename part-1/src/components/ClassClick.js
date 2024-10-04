import React, { Component } from 'react'

class ClassClick extends Component {
    clicked(){
        console.log("Clicked event occured")
    }
  render() {
    return (
      <div>
        <button onClick={this.clicked}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
