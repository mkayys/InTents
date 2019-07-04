import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';


const App = () => (
    <div>
        <Modal />
        <header>
            <h1>inTents</h1>
            <NavBarContainer />
        </header>
    </div>
);

export default App;