import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useToggle } from '../../hooks/useToggle';
import { Links } from './Links';
import './navbar.css';

export const Burger = () => {
  const [toggleMenu, setToggleMenu] = useToggle(false);

  return (
    <div className="gpt3__navbar-menu">
      {
        toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
      }
      {
        toggleMenu  && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <Links isBurger={true}/>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )
      }
    </div>
  )
}
