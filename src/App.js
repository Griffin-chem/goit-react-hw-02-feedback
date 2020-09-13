import React, { Component } from "react";

import Feedback from "./components/Feedback/Feedback";
import Statistic from "./components/Statistic/Statistic";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";

import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return !this.state.good
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const newState = { [name]: this.state[name] + 1 };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <Section title="Please, leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onFeedbackLeave={this.handleClick}
          />
        </Section>
        <Section title="Statistic">
          {!this.countTotalFeedback()
            ? Notification("No feedback provided yet!")
            : Statistic(
                this.state,
                this.countTotalFeedback(),
                this.countPositiveFeedbackPercentage()
              )}
        </Section>
      </div>
    );
  }
}

export default App;
