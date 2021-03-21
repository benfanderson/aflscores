import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../public/styles.css';

const Navbar = () => (
  <nav
    role="navigation"
    aria-label="main navigation"
    className={styles.navbar}
  >
    <div>
      <NavLink
        to="/"
        className={styles.navlink}
      >
        Home
      </NavLink>

      <NavLink
        to="/rounds"
        className={styles.navlink}
      >
        Games by Round
      </NavLink>

      <NavLink
        to="/clubs"
        className={styles.navlink}
      >
        Games by Club
      </NavLink>
    </div>
  </nav>
);
export default Navbar;
