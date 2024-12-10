import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Diary</Link>
      </li>
      <li>
        <Link to='/map'>Map</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
