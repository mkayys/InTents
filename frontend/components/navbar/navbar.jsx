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
                    <a href='https://github.com/mkayys'>
                        <img src='https://in-tents-seed.s3-us-west-1.amazonaws.com/main_images/GitHub-Mark-64px.png' alt='More Projects'/>
                    </a>
                </div>
        </div>
        )
    };

    return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;