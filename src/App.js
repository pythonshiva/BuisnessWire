import React, { Component } from "react";
import { connect } from "react-redux";
import helloWorld from "./actioncreators/index";
import HelloWorld from "./components/helloWorld/helloWorld";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  componentDidMount() {
    let response = this.props.helloWorld();

    this.setState({ value: response });
    console.log("value", response);
  }
  render() {
    return <HelloWorld value={this.props.value} />;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { helloWorld })(App);
