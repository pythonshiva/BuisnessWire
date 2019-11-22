import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="dataBox">
          <h1> {this.props.value} </h1>
        </div>
      </div>
    );
  }
}

export default HelloWorld;
