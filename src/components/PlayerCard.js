import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player, selected, onPlayerClick }) => {
  const buttonClass = selected
    ? 'ui active button player-card highlight'
    : 'ui button player-card';

  return (
    <div className={buttonClass} onClick={() => onPlayerClick(player)}>
      <img
        src={`/basketball/${player.pic}`}
        alt={player.name}
        className="right floated ui tiny image"
      />
      <div>
        <h4 className="name">
          #{player.number} {player.name}
        </h4>
        <div className="stats">X PTS Y REBS</div>
      </div>
    </div>
  );
};

export default PlayerCard;
