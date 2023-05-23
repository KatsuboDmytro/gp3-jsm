import React from 'react';
import { Burger, Links } from '../index';
import logo from '../../assets/logo.svg';
import './navbar.css';

export const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <Links isBurger={false}/>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>

      <Burger />
    </div>
  )
}