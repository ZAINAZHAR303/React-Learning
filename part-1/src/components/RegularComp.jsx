import { Component } from "react"

class RegularComp extends Component{
    render(){
        console.log("Regular Component rendered")
        return(
            <div>
                Regular Component{this.props.name}
            </div>
        )
    }
}
export default RegularComp