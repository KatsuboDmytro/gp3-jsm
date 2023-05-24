import React from 'react';
import './features.css';
import { featuresData } from '../../data/data';
import { Feature } from '../../components/feature/Feature';

export const Features = () => {
  return (
    <div className="gpt3__features section__padding flex-col" id="features">
      <div className="gpt3__features-heading flex-col">
        <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container flex-col">
        {
          featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))
        }
      </div>
    </div>
  )
}
