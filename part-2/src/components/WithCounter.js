import React from "react";

const UpdatedComponent = (Originalcomponent,incrementNumber) => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    IncrementCount = () => {
      this.setState((prevstate) => {
        return { count: prevstate.count + incrementNumber };
      });
    };

    render() {
      return (
        <Originalcomponent
          count={this.state.count}
          IncrementCount={this.IncrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};
export default UpdatedComponent;
