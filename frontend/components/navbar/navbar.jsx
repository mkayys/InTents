import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <a id="signupLink" href="#" onClick={() => openModal('signup')}>Sign up</a>
            &nbsp; &nbsp;
            <a id="loginLink" href="#" onClick={() => openModal('login')}>Log in</a>
        </nav>
    );
    const personalGreeting = () => {
        // debugger
        return (
        <hgroup className="header-group">
            <Link className='profile-page' to='/profile'>
                <h2 className="header-name">Hi, {currentUser.firstName} {currentUser.lastName.slice(0,1)}.</h2>
            </Link>
            <button className="header-button" onClick={logout}>Log out</button>
        </hgroup>
        )
    };

    return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;