import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Header = () => {
     return (
         <nav>
            <NavLink exact to="/" activeClassName="current">Homepage</NavLink>
            <NavLink exact to="/about" activeClassName="current">About</NavLink>
            <NavLink exact to="/lyrics" activeClassName="current">Lyrics</NavLink>
         </nav>
          
    );
}
export default Header;