export const fetchBookings = () => {
    return $.ajax({
        method: 'get',
        url: '/api/bookings',
    });
};

export const fetchBooking = (id) => {
    return $.ajax({
        method: 'get',
        url: `/api/bookings/${id}`
    });
};

export const createBooking = (booking) => {
    return $.ajax({
        method: 'post',
        url: '/api/bookings',
        data: { booking }
    });
};

export const deleteBooking = (id) => {
    return $.ajax({
        method: 'delete',
        url: `/api/bookings/${id}`
    });
};
