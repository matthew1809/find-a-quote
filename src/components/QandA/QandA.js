import React, { Component } from "react";
import * as contentful from "contentful";
import SingleQuestion from "./SingleQuestion";
import "./QandA.css";
import { Grid } from "@material-ui/core";

class QandA extends Component {
  state = {
    QandA: [],
  };

  client = contentful.createClient({
    space: "wr8412u3adco",
    accessToken: "lIT8lkoHfaYdhpjOOC6vZ66WMT8jKyM7jpcja_SPhNA",
  });

  componentDidMount() {
    this.fetchQandA().then(this.setQandA);
  }

  fetchQandA = () => this.client.getEntries();

  setQandA = response => {
    this.setState({
      QandA: response.items,
    });
  };

  render() {
    return (
      <Grid className="questions">
        <h3 className="questionsHeader">
          {this.state.QandA.length} questions in total
        </h3>
        {this.state.QandA.map(({ fields }, i) => (
          <SingleQuestion key={i} {...fields} />
        ))}
      </Grid>
    );
  }
}

export default QandA;
