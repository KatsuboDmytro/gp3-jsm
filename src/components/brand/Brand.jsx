import React from 'react';
import './brand.css';
import { brands } from '../../data/data';

export const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {
        brands.map((item, index) => (
          <div key={index}>
            <img src={item.brand} alt={item.brand} />
          </div>
        ))
      }
    </div>
  )
}
