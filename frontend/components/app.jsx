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

import ReviewIndexContainer from './reviews/review_index_container';
import BookingIndexContainer from "./bookings/booking_index_container";



// class App extends React.Component {

//   constructor() {
//     let currPage = (location.hash === "#/" ? "home-page" : "other-pages");
//     this.state = {
//       klass: currPage
//     }
//     this.changeClass = this.changeClass.bind(this);
//   }

//   changeClass(page) {
//     return (e) => {
//       this.setState({ klass: page });
//     }
//   }


//   render() {
//     return (
//       <div className={this.state.klass}>
//         <Modal />
//         <header className="name-navbar-container">
//           <div className="app-name">
//             <Link className="app-name-logo" to="/" onClick={this.changeClass('home-page')}>
//               IN<i className="fas fa-campground" />TENTS
//           {/* <img src={window.logo} alt=""/> */}
//             </Link>
//           </div>
//           <NavBarContainer />
//         </header>

//         <div className="locations" />


//         <Switch>
//           <Route exact path="/" component={SpotIndexContainer} />

//           <Route exact path="/map" component={SearchContainer} />
//           <Route exact path="/profile" component={UserShowContainer} />
//           <Route exact path="/spots/:spotId" component={SpotShowContainer} />

//           {/* <Route exact path="/bookings" component={BookingIndexContainer} /> */}

//           {/* <Route exact path="/" render={() => 
//                     <div className="test-container">
//                         Where would you like to camp?
//                     </div>} /> */}
//           {/* <Route exact path="/reviews" component={ReviewIndexContainer} /> */}
//         </Switch>

//         <div className="main-footer-container">
//           {/* <Footer /> */}
//         </div>

//       </div>
//     )
//   }
// };





const App = () => {
  // let klass;
  // (location.hash === "#/" ? klass = "home-page" : klass = "other-pages");
  return (
  <div>
    <Modal />
    <header className="name-navbar-container">
      <div className="app-name">
        <Link className="app-name-logo" to="/">
          IN<i className="fas fa-campground" />TENTS
          {/* <img src={window.logo} alt=""/> */}
        </Link>
      </div>
      <NavBarContainer />
    </header>

    <div className="locations" />


      <Switch>
        <Route exact path="/" component={SpotIndexContainer} />

        <Route exact path="/map" component={SearchContainer} />
        <Route exact path="/profile" component={UserShowContainer} />
        <Route exact path="/spots/:spotId" component={SpotShowContainer} />

        {/* <Route exact path="/bookings" component={BookingIndexContainer} /> */}
        
        {/* <Route exact path="/" render={() => 
                    <div className="test-container">
                        Where would you like to camp?
                    </div>} /> */}
        {/* <Route exact path="/reviews" component={ReviewIndexContainer} /> */}
      </Switch>
  
      <div className="main-footer-container">
        {/* <Footer /> */}
      </div>

  </div>
  )
};

export default App;
