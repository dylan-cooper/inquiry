import React, { Component } from 'react';
import Question from './Question';

export default class Quiz extends Component {
  render() {

    var question = "What is blue?";
    var options = ["color", "number"];
    return (
      <div>
        <Question question={question} options={options} />
      </div>
    );
  }
}
