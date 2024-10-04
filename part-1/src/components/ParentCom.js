import React, { Component } from 'react'
// import PureComp from "./PureComp";
// import RegularComp from './RegularComp';
import Memo from './Memo';
class ParentCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Parent'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                    name: 'Parent'
            })
        }, 5000);
    }
    
  render() {
    console.log("***********************parent component rendered")
    return (
      <div>
        <Memo  name={this.state.name}/>
        {/* <RegularComp name={this.state.name}/>
        <PureComp anything={this.state.name}/> */}

      </div>
    )
  }
}

export default ParentCom
