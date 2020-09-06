import React, { Component } from 'react';

import Feedback from './components/Feedback/Feedback';
import Statistic from './components/Statistic/Statistic';
import Notification from './components/Notification/Notification';

import './App.css';
import Section from './components/Section/Section';

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
    e.preventDefault();
    const newState = {[e.target.name]: this.state[e.target.name] + 1};
    this.setState(newState);
  };  

  render () { 
    return (
      <div>
        <Section title="Please, leave feedback" children={Feedback(Object.keys(this.state), this.handleClick)}></Section>
        <Section title="Statistic" children={
          (this.countTotalFeedback() === 0)
          ? Notification("No feedback provided yet!")
          : Statistic(this.state, this.countTotalFeedback(), this.countPositiveFeedbackPercentage())}></Section>
        {/* <section>
          <p>Statistic</p>
          <Statistic options={this.state} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}>
          </Statistic>
        </section> */}
      </div>
    );
  }
}

export default App;
