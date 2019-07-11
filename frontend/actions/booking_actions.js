import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const fetchBookings = () => dispatch => (
    BookingApiUtil.fetchBookings()
        .then(bookings => dispatch(receiveBookings(bookings)))
);

export const fetchBooking = (id) => dispatch => (
    BookingApiUtil.fetchBooking(id)
        .then(booking => dispatch(receiveBooking(booking)))
);

export const createBooking = (booking) => dispatch => (
    BookingApiUtil.createBooking(booking)
        .then(booking => dispatch(receiveBooking(booking)),
            err => (
                dispatch(receiveErrors(err.responseJSON))
            ))
);

export const deleteBooking = (id) => dispatch => (
    BookingApiUtil.deleteBooking(id)
        .then(booking => dispatch(removeBooking(booking)))
);

export const receiveBookings = (bookings) => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

export const receiveBooking = (payload) => ({
    type: RECEIVE_BOOKING,
    payload
});

export const removeBooking = (booking) => ({
    type: REMOVE_BOOKING,
    bookingId: booking.id
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});