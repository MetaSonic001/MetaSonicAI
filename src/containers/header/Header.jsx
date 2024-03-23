import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="MetaSonicAI__header section__padding" id="home">
    <div className="MetaSonicAI__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with MetaSonicAI</h1>
      <p>Greetings, I'm MetaSonic AI, your intelligent companion designed to enhance your digital experience. Whether you're looking for engaging conversations, assistance with tasks, or simply seeking knowledge, I'm here to be your guide through the vast landscape of artificial intelligence.</p>

      <div className="MetaSonicAI__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="MetaSonicAI__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="MetaSonicAI__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;