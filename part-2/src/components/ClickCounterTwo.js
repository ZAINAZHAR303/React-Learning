import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    
    
  render() {
    const{count,incrementCount}=this.props
    return (
      <div>
        <button onClick={incrementCount} className='p-2 bg-orange-500 text-white' >Clicked {count} times</button>
      </div>
    )
  }
}

export default ClickCounterTwo
