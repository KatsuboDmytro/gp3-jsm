import React from 'react'
import {navLinks} from '../../data/data';
import './navbar.css';

export const Links = ({isBurger}) => {
  return (
    <div className={`${isBurger ? 'gpt3__navbar-menu_container-links' : 'gpt3__navbar-links_container'}`}>
        {
            navLinks.map((link, index) => (
                <p key={index}><a href={`#${link.href}`}>{link.title}</a></p>
            ))
        }          
    </div>
  )
}
