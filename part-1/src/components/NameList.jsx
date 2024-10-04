import React, { Component } from 'react'

class NameList extends Component {
    constructor(props) {
      super(props)
      this.array = ["banana","apple","walermelon"]
      this.state = {
         
      }
    }
    
    
  render() {

    return (
      <div>
        {/* <h1>{this.array[0]}</h1>
        <h1>{this.array[1]}</h1>
        <h1>{this.array[2]}</h1> */}
        {
            this.array.map(element =><h1>{element}</h1>)
        }

      </div>
    )
  }
}

export default NameList
