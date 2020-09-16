import React from 'react';
import PlayerCard from './PlayerCard';

const TeamPanel = ({ players, selectedPlayer, onPlayerClick }) => {
  const renderedList = players.map(player => {
    const selected = selectedPlayer && selectedPlayer._id === player._id;
    //console.log(player);
    return (
      <div key={player._id} style={{ marginBottom: '10px' }}>
        <PlayerCard
          player={player}
          onPlayerClick={onPlayerClick}
          selected={selected}
        />
      </div>
    );
  });
  return renderedList;
};

export default TeamPanel;
