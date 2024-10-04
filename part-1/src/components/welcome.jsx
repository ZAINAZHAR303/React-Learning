import react, { Component } from "react"

class Welcome extends Component{
    render(){
        return (
        <div>
            <h1>this is {this.props.name} and superhero is {this.props.heroname} </h1>
            {this.props.children}
        </div>
        )
    }
}

export default Welcome;