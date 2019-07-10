import React from 'react';
import { Link } from 'react-router-dom';

const BookingIndexItem = ({ booking }) => (
    <div className='booking-list-items'>
        {booking.checkIn}
        {booking.checkOut}
    </div>
);

export default BookingIndexItem;