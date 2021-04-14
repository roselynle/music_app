import React from 'react';
import { NavLink } from 'react-router-dom';

import { BackButton } from '../../components';
import './style.css';

const Header = () => {
     return (
         <nav role='navigation'>
            <NavLink exact to="/" activeClassName="current">Homepage</NavLink>
            <NavLink exact to="/about" activeClassName="current">About</NavLink>
            <NavLink exact to="/lyrics" activeClassName="current">Lyrics</NavLink>
            <NavLink exact to="/albums" activeClassName="current">Albums</NavLink>
            <BackButton />
         </nav>
          
    );
}
export default Header;