import {
    RECEIVE_BOOKING_ERRORS,
    RECEIVE_BOOKING,
    CLEAR_ERRORS
} from '../actions/booking_actions';

const bookingErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOOKING_ERRORS:
            debugger
            return action.errors;
        case RECEIVE_BOOKING:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default bookingErrorsReducer;