import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        // debugger
        const { booking, spot } = this.props
        return (
            <div className='booking-list-items'>
                {booking.checkIn}
                {booking.checkOut}
                {spot.name}
                {spot.nearby}
            </div>

        );

    };

};

export default BookingIndexItem;
