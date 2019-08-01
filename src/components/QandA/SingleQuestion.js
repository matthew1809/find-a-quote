import React from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Sentiment = require("sentiment");

const analyseQuestion = question => {
  const sentiment = new Sentiment();
  const result = sentiment.analyze(question);
  return result.score;
};

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1000,
    margin: '20px auto 20px auto',
    padding: '20px'
  },
}));

const SingleQuestion = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={`Question from ${props.name}`}
        subheader={`Question sentiment score is ${analyseQuestion(
          props.question
        )}`}
      />

      <CardContent>
        {documentToReactComponents(props.richQuestion)}
        <br />

        <h3>Answer</h3>
        {documentToReactComponents(props.richAnswer)}
        <br />
      </CardContent>
    </Card>
  );
};

export default SingleQuestion;
