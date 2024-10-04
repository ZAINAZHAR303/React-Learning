import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        ParentName : "parent"
        
      }
      this.greetparent=this.greetparent.bind(this)
    }
    
    greetparent(ChildName){
        alert(`Hello ${this.state.ParentName} FROM ${ChildName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent GreekHandler={this.greetparent}/>
      </div>
    )
  }
}

export default ParentComponent
