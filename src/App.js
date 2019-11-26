import React, { Component } from "react";
import { connect } from "react-redux";
import hello from "./actioncreators/index";
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
    this.props.hello();
  }

  render() {
    return <HelloWorld value={this.props.value} />;
  }
}

const mapStateToProps = state => {
  return {
    value: state.value
  };
};

export default connect(mapStateToProps, { hello })(App);
