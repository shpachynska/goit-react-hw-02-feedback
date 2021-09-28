import './App.css';
import React, { Component } from 'react';
import Feedback from './components/Feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <div className="App">
          <Feedback defaultProps={(good, neutral, bad)} />
        </div>
      </>
    );
  }
}

export default App;
