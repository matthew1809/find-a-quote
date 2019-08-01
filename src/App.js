import React, { Component } from "react";
import Search from "./components/Search/Search";
import QandA from './components/QandA/QandA';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="backgroundStyle">
          <Router>
              <Route exact path="/" component={Search} />
              <Route path="/questions" component={QandA} />
          </Router>
      </div>
    );
  }
}

export default App;
