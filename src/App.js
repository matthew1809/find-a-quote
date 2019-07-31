import React, { Component } from "react";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="backgroundStyle">
        <div className="container">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
