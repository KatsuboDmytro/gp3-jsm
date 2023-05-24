import React from 'react';
import './footer.css'
import { logo } from '../index';
import { Links } from './Links';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex-col section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo flex-col">
          <img src={logo} alt="gpt3_logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <Links />
      </div>

      <div className="gpt3__footer-copyright">
        <p>@{currentYear} GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}
