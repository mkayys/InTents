import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';
// import { fetchSpots, fetchSpot } from './actions/spot_actions';
// import { fetchBookings, fetchBooking, createBooking, deleteBooking } from './actions/booking_actions';
// import { createBooking } from './util/booking_api_util';
// import { fetchUser } from './actions/user_actions';

// import { fetchReviewsForSpot } from './util/review_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');

    // TESTING START
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    // window.fetchUser = fetchUser;
    // window.createBooking = createBooking;
    // window.deleteBooking = deleteBooking;
    // window.fetchBookings = fetchBookings;
    // window.fetchBooking = fetchBooking;
    // window.fetchSpots = fetchSpots;
    // window.fetchSpot = fetchSpot;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.fetchReviewsForSpot = fetchReviewsForSpot;
    // TESTING END

    ReactDOM.render(<Root store={store} />, root);
});