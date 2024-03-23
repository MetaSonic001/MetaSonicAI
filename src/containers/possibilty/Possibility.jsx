import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="MetaSonicAI__possibility section__padding" id="possibility">
    <div className="MetaSonicAI__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="MetaSonicAI__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>MetaSonicAI invites you to explore boundless horizons, transcending imagination's limits. Journey forth, discover, and create with MetaSonicAI as your steadfast ally.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;