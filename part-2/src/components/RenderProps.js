import React, { Component } from 'react'
import ClickCounterTwo from './ClickCounterTwo'

class RenderProps extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
        this.incrementCount=()=>{
          this.setState(prevstate =>{
              return { count: prevstate.count + 1 };
              })
        }
      }
  render() {
    return (
      <div>
       {this.props.name(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default RenderProps
