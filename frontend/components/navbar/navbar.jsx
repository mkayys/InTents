import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/signup">Sign up</Link>
            &nbsp;or&nbsp;
            <Link to="/login">Log in</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.firstName} {currentUser.lastName[0]}.</h2>
            <button className="header-button" onClick={logout}>Log out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;