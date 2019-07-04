import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';


const App = () => (
    <div>
        <Modal />
        <header className="name-navbar-container">
            <div className='app-name'>
                <i className="fas fa-campground"></i>
                in-Tents
            </div>
            <NavBarContainer />
        </header>
    </div>
);

export default App;