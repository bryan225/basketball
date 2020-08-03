import React from 'react';
import './App.css';
import GameClock from './GameClock';

class App extends React.Component {
  state = { timeLeft: null, awayScore: 0, homeScore: 0 };

  awayPlusClick = () => {
    this.setState({ awayScore: this.state.awayScore + 1 });
  };

  homePlusClick = () => {
    this.setState({ homeScore: this.state.homeScore + 1 });
  };
  render() {
    return (
      <div className="ui container mainContainer">
        <div className="header">
          <div className="away-score">{this.state.awayScore}</div>
          <div className="clock-container">
            <GameClock
              onNewTime={(newTime) => this.setState({ timeLeft: newTime })}
            />
          </div>
          <div className="home-score">{this.state.homeScore}</div>
        </div>
        <br />
        <br />
        <div style={{ display: 'inline-block', width: '100px' }}>
          Away: <i className="large plus icon" onClick={this.awayPlusClick}></i>
        </div>
        <div style={{ display: 'inline-block', width: '100px' }}>
          Home: <i className="large plus icon" onClick={this.homePlusClick}></i>
        </div>
      </div>
    );
  }
}

export default App;
