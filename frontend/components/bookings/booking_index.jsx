import React from 'react';
import BookingIndexItem from './booking_index_item';
import { Link } from 'react-router-dom';

class BookingIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBookings();
    }

    render() {
        const bookings = this.props.bookings.map(booking => (
            <BookingIndexItem
                key={booking.id}
                booking={booking} />
        ));

        return (
            <div>
                <ul className='spots-index-list'>
                    {bookings}
                </ul>
            </div>
        );
    }
}

export default BookingIndex;