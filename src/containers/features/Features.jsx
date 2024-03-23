import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Dynamic Conversations:',
    text: ' Engage in diverse discussions spanning arts, culture, technology, and science, exploring fascinating topics together.',
  },
  {
    title: 'Efficient Task Management:',
    text: 'Streamline scheduling, reminders, and calculations effortlessly with MetaSonic AI, helping you stay organized.',
  },
  {
    title: 'Knowledge Empowerment:',
    text: ' Dive into insightful discussions, discover new ideas, and expand your horizons across various domains with MetaSonic AI vast knowledge base.',
  },
  {
    title: 'Personalization: ',
    text: 'Customize your experience with MetaSonic AI to suit your preferences, ensuring a tailored interaction that prioritizes your satisfaction.',
  },
];

const Features = () => (
  <div className="MetaSonicAI__features section__padding" id="features">
    <div className="MetaSonicAI__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="MetaSonicAI__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;