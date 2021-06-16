import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from '../../public/styles.css';
import '../../public/styles.scss';

const Navbar = () => (
  <nav
    role="navigation"
    aria-label="main navigation"
    className="navbar"
  >
    <div className="navLinkContainer">
      <NavLink
        to="/"
        className="navlink"
      >
        Home
      </NavLink>

      <NavLink
        to="/rounds"
        className="navlink"
      >
        Games by Round
      </NavLink>

      <NavLink
        to="/clubs"
        className="navlink"
      >
        Games by Club
      </NavLink>
    </div>
  </nav>
);
export default Navbar;
