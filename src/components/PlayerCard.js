import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player, selected, onPlayerClick }) => {
  const buttonClass = selected
    ? 'ui active button player-card highlight'
    : 'ui button player-card';

  return (
    <div className={buttonClass} onClick={() => onPlayerClick(player)}>
      <img
        src={`/${player.pic}`}
        alt={player.name}
        className="right floated ui tiny image"
      />
      <div className="item">
        <div className="header">
          <p>#{player.number}</p>
          <p>{player.name}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
