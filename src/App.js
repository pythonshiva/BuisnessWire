import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideDrawer />
    </div>
  );
}

export default App;
