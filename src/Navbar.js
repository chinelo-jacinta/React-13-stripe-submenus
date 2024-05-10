import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Navbar = () => {
  const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();
  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const getBtn = e.target.getBoundingClientRect();
    const center = (getBtn.left + getBtn.right) / 2;
    const bottom = getBtn.bottom - 3;
    openSubMenu(page, { center, bottom });
  };
  const handleHover = (e) => {
    const target = e.target.classList.contains('link-btn');
    if (!target) {
      return closeSubMenu();
    }
    console.log(target);
  };
  return (
    <nav className='nav' onMouseOver={handleHover}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
