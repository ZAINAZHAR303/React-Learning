import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.ClickHandler=this.ClickHandler.bind(this)
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)

    }
    ClickHandler(){
        alert(this.inputRef.current.value)
    }
  render() {
    console.log();
    return (
      <div>
        
        <input  type="text" ref={this.inputRef}></input>
        <button onClick={this.ClickHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo
