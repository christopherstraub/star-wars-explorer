import React from 'react';

import './TitlePage.scss';

const TitlePage = () => {
  return (
    <div className="title-container vh-100 tc heading-star-wars-font yellow relative">
      <div className="title dib">
        Star Wars
        <br />
        Explorer
      </div>
      <div className="title-mobile dib">
        Star Wars
        <br />
        Explorer
      </div>
      <img
        className="relative"
        src={require('../../images/darth-vader.png')}
        alt="Darth Vader"
      />
    </div>
  );
};

export default TitlePage;
