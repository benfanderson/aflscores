import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/_nav.scss';

const Navbar = () => (
  <nav
    role="navigation"
    aria-label="main navigation"
    id="navbar"
  >
    <div id="navbar--linksContainer">
      <NavLink
        to="/"
        className="navbar--link"
      >
        Home
      </NavLink>

      <NavLink
        to="/rounds"
        className="navbar--link"
      >
        Games by Round
      </NavLink>

      <NavLink
        to="/clubs"
        className="navbar--link"
      >
        Games by Club
      </NavLink>
    </div>
  </nav>
);
export default Navbar;
