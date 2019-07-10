import {
    RECEIVE_BOOKINGS,
    RECEIVE_BOOKING,
    REMOVE_BOOKING
} from '../actions/booking_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKINGS:
            return merge({}, state, action.bookings);
        case RECEIVE_BOOKING:
            return merge({}, state, action.payload.bookings);
        case REMOVE_BOOKING:
            let nextState = Object.assign({}, state);
            delete nextState[action.bookingId]
            return nextState;
        default:
            return state;
    }
};

export default bookingsReducer;