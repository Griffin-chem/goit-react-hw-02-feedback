import React, { Component } from 'react';

import './App.css';

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = (e) => {
    const newState = {[e.target.name]: this.state[e.target.name] + 1}
    this.setState(newState);
  };

  render () { 
    return (
      <div>
        <button name="good" onClick={this.handleClick}>Good</button>
        <button name="neutral" onClick={this.handleClick}>Neutral</button>
        <button name="bad" onClick={this.handleClick}>Bad</button>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default App;
