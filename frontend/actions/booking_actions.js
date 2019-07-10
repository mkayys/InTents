import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';


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
        .then(booking => dispatch(receiveBooking(booking)))
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
}) 