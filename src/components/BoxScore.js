import React from 'react';

class BoxScore extends React.Component {
  renderTeamBoxScore = players => {
    const renderedList = players.map(player => {
      let fgMade = 0;
      let fgMiss = 0;
      let threePtMade = 0;
      let threePtMiss = 0;
      let ftMade = 0;
      let ftMiss = 0;
      let oReb = 0;
      let dReb = 0;
      let stl = 0;
      let blk = 0;
      let foul = 0;
      let to = 0;

      this.props.eventRecord.forEach(record => {
        if (record.Player === player) {
          switch (record.Event) {
            case '2PT MADE':
              fgMade++;
              break;
            case '2PT MISS':
              fgMiss++;
              break;
            case '3PT MADE':
              fgMade++;
              threePtMade++;
              break;
            case '3PT MISS':
              fgMiss++;
              threePtMiss++;
              break;
            case 'FT MADE':
              ftMade++;
              break;
            case 'FT MISS':
              ftMiss++;
              break;
            case 'O.REB':
              oReb++;
              break;
            case 'D.REB':
              dReb++;
              break;
            case 'STL':
              stl++;
              break;
            case 'BLK':
              blk++;
              break;
            case 'TO':
              to++;
              break;
            case 'FOUL':
              foul++;
              break;
            default:
              break;
          }
        }
      });
      let pts = fgMade * 2 + threePtMade + ftMade;

      return (
        <tr key={player._id}>
          <td>{player.number}</td>
          <td>{player.name}</td>
          <td>{pts}</td>
          <td>
            {fgMade}/{fgMade + fgMiss}
          </td>
          <td>
            {threePtMade}/{threePtMade + threePtMiss}
          </td>
          <td>
            {ftMade}/{ftMade + ftMiss}
          </td>
          <td>{oReb + dReb}</td>
          <td>{stl}</td>
          <td>{blk}</td>
          <td>{to}</td>
          <td>{foul}</td>
        </tr>
      );
    });
    return renderedList;
  };
  render() {
    //console.log('refreshing boxscore');
    const awayList = this.renderTeamBoxScore(this.props.awayPlayers);
    const homeList = this.renderTeamBoxScore(this.props.homePlayers);

    return (
      <div>
        <table className="ui celled small unstackable table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>PTS</th>
              <th>FG</th>
              <th>3PT</th>
              <th>FT</th>
              <th>REB</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>FL</th>
            </tr>
          </thead>
          <tbody>{awayList}</tbody>
        </table>
        <table className="ui celled small unstackable table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>PTS</th>
              <th>FG</th>
              <th>3PT</th>
              <th>FT</th>
              <th>REB</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>FL</th>
            </tr>
          </thead>
          <tbody>{homeList}</tbody>
        </table>
      </div>
    );
  }
}

export default BoxScore;
