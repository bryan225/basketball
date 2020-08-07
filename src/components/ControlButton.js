import React from 'react';
import './ControlButton.css';

const ControlButton = (props) => {
  return (
    <div
      className="ui grey large button control-button"
      onClick={() => props.onControlButtonClick(props.buttonText)}
    >
      {props.buttonText}
    </div>
  );
};

export default ControlButton;
