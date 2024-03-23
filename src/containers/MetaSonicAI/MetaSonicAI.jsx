import React from 'react';
import Feature from '../../components/feature/Feature';
import './MetaSonicAI.css';

const MetaSonicAI = () => (
  <div className="MetaSonicAI__MetaSonicAI section__margin" id="wMetaSonicAI">
    <div className="MetaSonicAI__MetaSonicAI-feature">
      <Feature title="What is MetaSonicAI" text="
MetaSonicAI is a cutting-edge AI platform crafted to be your digital companion, blending advanced conversational skills, task management efficiency, and a wealth of knowledge. With personalized experiences, it adapts to your preferences, ensuring every interaction is seamless and enjoyable. Whether engaging in thought-provoking conversations, optimizing tasks, or seeking inspiration, MetaSonicAI is your guide in navigating the vast landscape of artificial intelligence, empowering you every step of the way." />
    </div>
    <div className="MetaSonicAI__MetaSonicAI-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="MetaSonicAI__MetaSonicAI-container">
      <Feature title="Chatbot Capabilities:" text="MetaSonicAI engages users in natural conversations on diverse topics, offering an interactive experience." />
      <Feature title="Task Automation:" text="MetaSonicAI streamlines tasks like scheduling, reminders, and calculations, enhancing productivity." />
      <Feature title="Real-Time Updates:" text="MetaSonicAI keeps users informed with the latest news, weather forecasts, stock trends, and more, ensuring they stay up-to-date." />
    </div>
  </div>
);

export default MetaSonicAI;