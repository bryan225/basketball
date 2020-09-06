import React from 'react';
import './App.css';
import GameClock from './GameClock';
import ControlPanel from './ControlPanel';
import TeamPanel from './TeamPanel';
import BoxScore from './BoxScore';
import awayData from '../data/away.json';
import homeData from '../data/home.json';

class App extends React.Component {
  state = {
    timeLeft: null,
    awayScore: 0,
    homeScore: 0,
    selectedPlayer: null,
    eventRecord: [],
  };

  recordEvent = (event) => {
    this.state.eventRecord.push({
      Player: this.state.selectedPlayer,
      TimeStamp: this.state.timeLeft,
      Event: event,
    });

    this.updateScoreBoard();
  };

  getEventRecordByPlayer = (player) => {
    const playerRecord = [];
    this.state.eventRecord.forEach((record) => {
      if (record.Player === player) {
        playerRecord.push(record);
      }
    });
    return playerRecord;
  };
  updateScoreBoard = () => {
    let newAwayScore = 0;
    let newHomeScore = 0;
    this.state.eventRecord.forEach((record) => {
      let pointToAdd = 0;

      switch (record.Event) {
        case '2PT MADE':
          pointToAdd = 2;
          break;
        case '3PT MADE':
          pointToAdd = 3;
          break;
        case 'FT MADE':
          pointToAdd = 1;
          break;
        default:
          pointToAdd = 0;
          break;
      }

      if (this.playerFromHomeTeam(record.Player)) {
        newHomeScore += pointToAdd;
      } else {
        newAwayScore += pointToAdd;
      }

      this.setState({ awayScore: newAwayScore });
      this.setState({ homeScore: newHomeScore });
    });
  };
  onControlButtonClick = (buttonText) => {
    this.recordEvent(buttonText);
    this.setState({ selectedPlayer: null });
  };

  playerFromHomeTeam = (player) => {
    return homeData.includes(player);
  };

  onPlayerClick = (player) => {
    if (this.state.selectedPlayer === player) {
      this.setState({ selectedPlayer: null });
    } else {
      this.setState({ selectedPlayer: player });
    }
  };
  render() {
    return (
      <div className="mainContainer">
        <div className="ui grid">
          <div className="row">
            <div className="left floated left aligned three wide column">
              <div className="away-score">{this.state.awayScore}</div>
            </div>
            <div className="center aligned ten wide column">
              <div className="clock-container">
                <GameClock
                  onNewTime={(newTime) => this.setState({ timeLeft: newTime })}
                />
              </div>
            </div>
            <div className="right floated right aligned three wide column">
              <div className="home-score">{this.state.homeScore}</div>
            </div>
          </div>
          <div className="row">
            <div className="left floated four wide column">
              <TeamPanel
                players={awayData}
                selectedPlayer={this.state.selectedPlayer}
                onPlayerClick={this.onPlayerClick}
              />
            </div>

            <div className="center aligned eight wide column">
              {this.state.selectedPlayer ? (
                <ControlPanel
                  onControlButtonClick={this.onControlButtonClick}
                />
              ) : (
                <BoxScore
                  eventRecord={this.state.eventRecord}
                  awayPlayers={awayData}
                  homePlayers={homeData}
                />
              )}
            </div>
            <div className="right floated four wide column">
              <TeamPanel
                players={homeData}
                selectedPlayer={this.state.selectedPlayer}
                onPlayerClick={this.onPlayerClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
