import React, { Component } from "react";
import Search from "./components/Search";
import QandA from './components/QandA/QandA';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="backgroundStyle">
        <div className="container">
          <Router>
              <Route exact path="/" component={Search} />
              <Route path="/questions" component={QandA} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
