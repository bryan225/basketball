import React from 'react';
import './App.css';
import GameClock from './GameClock';

class App extends React.Component {
  state = { timeLeft: null };

  render() {
    return (
      <div className="ui container mainContainer">
        <div className="clock-container">
          <GameClock
            onNewTime={(newTime) => this.setState({ timeLeft: newTime })}
          />
        </div>
      </div>
    );
  }
}

export default App;
