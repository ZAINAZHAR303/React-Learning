import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor() {
    super()
    
    this.state = {
       counter:0
    }
  }
  increaseCounter(){
    this.setState({
        counter:this.state.counter+1
    },()=>{console.log(this.state.counter)})
    
  }

  render() {
    return (
      <div>
        <p>counter - {this.state.counter}</p>
        <button onClick={()=>this.increaseCounter()}>increment</button>
      </div>
    )
  }
}

export default Counter
