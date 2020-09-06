import React, { Component } from 'react';

import './App.css';

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, elem) => acc + elem, 0)
  };

  countPositiveFeedbackPercentage = () => {
   return (this.state.good === 0) ? 0 : Math.round(this.state.good / this.countTotalFeedback() * 100)
  }

  handleClick = (e) => {
    const newState = {[e.target.name]: this.state[e.target.name] + 1}
    this.setState(newState);
  };

  render () { 
    return (
      <div>
        <section>
          <p>Please, leave feedback</p>
          <button name="good" onClick={this.handleClick}>Good</button>
          <button name="neutral" onClick={this.handleClick}>Neutral</button>
          <button name="bad" onClick={this.handleClick}>Bad</button>
        </section>
        <section>
          <p>Statistic</p>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </section>
      </div>
    );
  }
}

export default App;
