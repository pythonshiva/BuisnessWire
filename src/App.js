import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import BackDrop from "./components/BackDrop/BackDrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
      </div>
    );
  }
}

export default App;
