import React from 'react';
import Arrow from './Arrow';

const getCurrentCardOutOfTotal = (
  resourceTitle,
  resourceData,
  instancesIndex
) => {
  switch (resourceTitle) {
    case 'people':
      return `${instancesIndex[0]}/${resourceData[0].length}`;
  }
  switch (resourceTitle) {
    case 'planets':
      return `${instancesIndex[0]}/${resourceData[1].length}`;
  }
  switch (resourceTitle) {
    case 'species':
      return `${instancesIndex[0]}/${resourceData[2].length}`;
    default:
  }
};

const Heading = ({
  resourceTitle,
  resourceData,
  instancesIndex,
  handleCardChange,
}) => {
  return (
    <div className="tc mb4 mt5 flex justify-center items-center">
      <Arrow direction="left" handleCardChange={handleCardChange} />
      <div className="flex flex-column">
        <h1 className="yellow tc dib ma0">{resourceTitle}</h1>
        <h2 className="yellow tc dib ma0">
          {getCurrentCardOutOfTotal(
            resourceTitle,
            resourceData,
            instancesIndex
          )}
        </h2>
      </div>

      <Arrow direction="right" handleCardChange={handleCardChange} />
    </div>
  );
};

export default Heading;
