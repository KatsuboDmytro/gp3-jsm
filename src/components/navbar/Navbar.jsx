import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const navLinks = [
  { "href": "home", "title": "home" },
  { "href": "wgpt3", "title": "What is GPT3?" },
  { "href": "possibility", "title": "OpenAI" },
  { "href": "features", "title": "Case Studies" },
  { "href": "blog", "title": "Library" },
];

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          {
            navLinks.map((link, index) => (
              <p key={index}><a href={`#${link.href}`}>{link.title}</a></p>
            ))
          }
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {
        toggleMenu 
        && 
        (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          {
            navLinks.map((link, index) => (
              <p key={index}><a href={`#${link.href}`}>{link.title}</a></p>
            ))
          }          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )
        }
      </div>
    </div>
  )
}
