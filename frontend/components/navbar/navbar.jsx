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
                    <Link className='profile-page' to='/profile'>
                        Trips
                    </Link>
                    <Link className='main-page' to='/'>
                        <button className="logout-button" onClick={logout}>Log out</button>
                    </Link>
                </div>
        </div>
        )
    };

    return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;