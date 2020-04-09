import React from 'react';
import './Arrow.scss';

const Arrow = ({ direction, handleCardChange }) => {
  if (direction === 'left') {
    return (
      <div
        onClick={handleCardChange[0]}
        className="arrow dib f2 black dib br3 pa3 ma2 ba mr4"
      >
        ←
      </div>
    );
  } else if (direction === 'right') {
    return (
      <div
        onClick={handleCardChange[1]}
        className="arrow dib f2 black dib br3 pa3 ma2 ba ml4"
      >
        →
      </div>
    );
  }
};

export default Arrow;
