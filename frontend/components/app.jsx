import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBarContainer from "./navbar/navbar_container";
import Modal from "./modal/modal";
import { Link } from "react-router-dom";
import SpotIndexContainer from "./spots/spot_index_container";
import SpotShowContainer from "./spots/spot_show_container";
import SearchContainer from "./search/search_container";
import UserShowContainer from "./user/user_show_container";
import Footer from "./footer/footer";

import BookingIndexContainer from "./bookings/booking_index_container";

const App = () => (
  <div>
    <Modal />
    <header className="name-navbar-container">
      <div className="app-name">
        <Link className="app-name" to="/">
          IN<i className="fas fa-campground" />TENTS
        </Link>
      </div>
      <NavBarContainer />
    </header>

    <div className="locations" />


      <Switch>
        <Route exact path="/" component={SpotIndexContainer} />
        <Route exact path="/profile" component={UserShowContainer} />
        <Route exact path="/spots/:spotId" component={SpotShowContainer} />
        <Route exact path="/spotsmap" component={SearchContainer} />
        <Route exact path="/bookings" component={BookingIndexContainer} />
        {/* <Route exact path="/" render={() => 
                    <div className="test-container">
                        Where would you like to camp?
                    </div>} /> */}
      </Switch>
  
      <div className="main-footer-container">
        <Footer />
      </div>
  </div>
);

export default App;
