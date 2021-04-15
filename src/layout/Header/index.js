import React from "react";
import { NavLink } from "react-router-dom";

import { BackButton } from "../../components";
import "./style.css";

const Header = () => {
    return (
        <nav role="navigation">
            <BackButton />
            <NavLink exact to="/" activeClassName="current">
                Homepage
            </NavLink>
            <NavLink exact to="/about" activeClassName="current">
                About
            </NavLink>
            <NavLink exact to="/lyrics" activeClassName="current">
                Lyrics
            </NavLink>
            <NavLink exact to="/albums" activeClassName="current">
                Albums
            </NavLink>
        </nav>
    );
};
export default Header;
