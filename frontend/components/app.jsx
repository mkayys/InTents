import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import SpotIndexContainer from './spots/spot_index_container';
import SpotShowContainer from './spots/spot_show_container';


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

        <div className="test-container">
            Everywhere you want to camp
        </div>

        <Switch>
            <Route exact path="/spots" component={SpotIndexContainer} />
            <Route exact path="/spots/:spotId" component={SpotShowContainer} />
        </Switch>
    </div>
);

export default App;
