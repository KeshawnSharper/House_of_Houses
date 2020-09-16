import React, { Component } from "react";
import { Context } from "./Context";

class Provider extends Component {
  state = {
    data: {
      name: "jude",
      email: "",
      password: ""
    }
  };

  logIn = (name) => {
    this.setState({
      data: name
    });
  };

  logOut = () => {
    this.setState({
      data: null
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            logIn: this.logIn,
            logOut: this.logOut,
            handleSubmit: this.handleSubmit
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export { Provider };
