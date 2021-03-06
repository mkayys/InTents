import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <div className='link-wrapper'>
                <a id="signupLink" onClick={() => openModal('signup')}>Sign up</a>
            </div>

            <div className='link-wrapper'>
                <a id="loginLink" onClick={() => openModal('login')}>Log in</a>
            </div>
        </nav>
    );
    const personalGreeting = () => {
        return (
        <div className="logged-in-dropdown">
            <button className='dropbtn'>
                <img src='https://in-tents-seed.s3-us-west-1.amazonaws.com/main_images/main-icon.png' className='dropdown-img'/>
            </button>

            <div className='dropdown-content'>
                <a href='/#/profile' className='profile-page'>
                    Trips
                </a>
                <a href='/#/' className='main-page'>
                    <button className="logout-button" onClick={logout}>Log out</button>
                </a>
                <a href='https://github.com/mkayys' target="_blank" className='github-link'>
                    <img src='https://in-tents-seed.s3-us-west-1.amazonaws.com/main_images/GitHub-Mark-64px.png' alt='More Projects' className='github' />
                </a>
            </div>
        </div>
        )
    };

    return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;