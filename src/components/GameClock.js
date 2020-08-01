import React from 'react';
import './GameClock.css';

class GameClock extends React.Component {
  state = { secondLeft: 600, timerRunning: false };

  tick() {
    const newTime = this.state.secondLeft === 0 ? 0 : this.state.secondLeft - 1;

    this.setState({
      secondLeft: newTime,
    });

    this.props.onNewTime(this.state.secondLeft);
  }

  onControlClick = () => {
    this.setState({ timerRunning: !this.state.timerRunning });
    if (!this.state.timerRunning) {
      this.timerID = setInterval(() => this.tick(), 1000);
    } else {
      clearInterval(this.timerID);
    }
  };

  formatTime(timeInSecond) {
    const min = Math.floor(timeInSecond / 60);
    const sec = timeInSecond % 60;
    return (
      (min < 10 ? '0' + min.toString() : min.toString()) +
      ':' +
      (sec < 10 ? '0' + sec.toString() : sec.toString())
    );
  }
  render() {
    return (
      <div className="clockContainer">
        <div className="timer">{this.formatTime(this.state.secondLeft)}</div>

        <div onClick={this.onControlClick}>
          {this.state.timerRunning ? (
            <i className="large pause icon" />
          ) : (
            <i className="large play icon" />
          )}
        </div>
      </div>
    );
  }
}

export default GameClock;
