import React, { Component } from 'react'
import UpdatedComponent from './WithCounter';
class HoverCounter extends Component {
    
  render() {
    const { count,IncrementCount } = this.props;
    return (
      <div>
        <h3 onMouseOver={IncrementCount}> Hovered me {count} times</h3>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter,12)
