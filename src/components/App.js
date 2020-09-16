import React from 'react';
import './App.css';
import GameClock from './GameClock';
import ControlPanel from './ControlPanel';
import TeamPanel from './TeamPanel';
import BoxScore from './BoxScore';
import bryanode from '../apis/bryanode';

class App extends React.Component {
  state = {
    timeLeft: null,
    awayScore: 0,
    homeScore: 0,
    selectedPlayer: null,
    eventRecord: [],
    homeTeam: [],
    awayTeam: [],
  };

  getTeams = async () => {
    const response = await bryanode.get('/teams');
    //console.log(response);
    this.setState({
      homeTeam: response.data.data[0].players,
      awayTeam: response.data.data[1].players,
    });
  };

  componentDidMount() {
    this.getTeams();
  }
  recordEvent = event => {
    console.log(this.state.selectedPlayer);
    this.state.eventRecord.push({
      Player: this.state.selectedPlayer,
      TimeStamp: this.state.timeLeft,
      Event: event,
    });

    this.updateScoreBoard();
  };

  getEventRecordByPlayer = player => {
    const playerRecord = [];
    this.state.eventRecord.forEach(record => {
      if (record.Player === player) {
        playerRecord.push(record);
      }
    });
    return playerRecord;
  };
  updateScoreBoard = () => {
    let newAwayScore = 0;
    let newHomeScore = 0;
    this.state.eventRecord.forEach(record => {
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
  onControlButtonClick = buttonText => {
    this.recordEvent(buttonText);
    this.setState({ selectedPlayer: null });
  };

  playerFromHomeTeam = player => {
    return this.state.homeTeam.includes(player);
  };

  onPlayerClick = player => {
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
                  onNewTime={newTime => this.setState({ timeLeft: newTime })}
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
                players={this.state.awayTeam}
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
                  awayPlayers={this.state.awayTeam}
                  homePlayers={this.state.homeTeam}
                />
              )}
            </div>
            <div className="right floated four wide column">
              <TeamPanel
                players={this.state.homeTeam}
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
