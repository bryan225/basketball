import React from 'react';
import ControlButton from './ControlButton';

const ControlPanel = (props) => {
  return (
    <div className="ui center aligned two column grid">
      <div className="column">
        <ControlButton
          buttonText="2PT MADE"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="2PT MISS"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="3PT MADE"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="3PT MISS"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="FT MADE"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="FT MISS"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="O.REB"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="D.REB"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="STL"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="BLK"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="TO"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
      <div className="column">
        <ControlButton
          buttonText="FOUL"
          onControlButtonClick={props.onControlButtonClick}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
