import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    return(
        this.state.isLoggedIn && <div>welcome user</div>
    )

            // TERNARY CONDITIONAL OPERATOR 
    // return (
    //     this.state.isLoggedIn?
    //         <div>welcome guest</div>
    //         :<div>welcome ALI</div>

    // )

    //         // Element variables Approach
    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Welcome Guest</div>
    // }else{
    //     message = <div>Welcome ALI</div>
    // }
    // return(
    //     <div>{message}</div>
    // )
    
            //    if else approach
        // if(this.state.isLoggedIn){
        //     return <div>Welcome User</div>
        // }else{
        //     return <div>Welcome Ali</div>
        // }
            
  }
}

export default UserGreetings










