import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { booking, spot, deleteBooking } = this.props
        return (
            <li key={booking.id} className='all-bookings'>
                <div className='booking-list-and-cancel'>
                    <div className='booking-list'>
                        <span className='trips'>Pitching tent ...</span>
                        <div className='trip-location-info'>
                            <strong>at:</strong> <Link to={`/spots/${spot.id}`} className='booking-to-spot-link'>{spot.name}</Link>
                            <div className='trip-place'>
                                <strong>in:</strong> {spot.nearby}
                            </div>
                        </div>
                        <div className='trip-duration-info'>
                            <strong>from:</strong> {booking.checkIn}
                            &nbsp;
                            <span className='trip-checkout'>
                                <strong>to:</strong> {booking.checkOut}
                            </span>
                        </div>
                    </div>
                    <div className='cancel-button'>
                        <button className="cancel-booking-button" onClick={() => deleteBooking(booking.id)}>Cancel</button>
                    </div>
                </div>
            </li>


        );

    };

};

export default BookingIndexItem;
