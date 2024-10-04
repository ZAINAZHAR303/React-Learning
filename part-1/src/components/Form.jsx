import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      value:"React",
      comment:"",
      
    };
    this.CommentChanger =this.CommentChanger.bind(this)
  }
  ChangedInput = (event) => {
    this.setState({ message:event.target.value });
  };

  handleTopicChange = (event)=>{
    this.setState({value:event.target.value })
  }
  CommentChanger(event){
    this.setState({comment:event.target.value})

  }
  SubmitData=(event)=>{
    event.preventDefault()
    alert(`${this.state.message} ${this.state.value} ${this.state.comment}`)
  }
  render() {
    return (

      <form onSubmit={this.SubmitData}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.message}
           onChange={this.ChangedInput}></input>
        </div>
        <div>
          <label>comments</label>
          <textarea value={this.state.comment} onChange={this.CommentChanger}></textarea>
        </div>

        <div>
            <label>topic</label>
            <select value={this.state.value} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
        </div>
        <div>
          <button type='submit'>submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
