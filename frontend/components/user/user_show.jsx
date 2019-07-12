import React from 'react';
import { Link } from 'react-router-dom';
import BookingIndexItem from '../../components/bookings/booking_index_item';


class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {

        if (this.props.userId === undefined) return null;
        if (this.props.user === undefined) return null;
        if (this.props.bookings === undefined) return null;
        if (this.props.spots === undefined) return null;
        // debugger
        const bookings = this.props.bookings.map(booking => {
            let spot = undefined;
            this.props.spots.forEach( potentialSpot => {
                if (booking.spotId === potentialSpot.id) {
                    // debugger
                    spot = potentialSpot;
                }
            })
            return (
                <BookingIndexItem
                    key={booking.id}
                    booking={booking}
                    spot={spot} />
            )

        });
        

        return (
            <div className='user-profile'>
                <div className='user-info'>
                    {this.props.user.firstName} {this.props.user.lastName[0]}.
                </div>


                <div className='user-bookings-list'>
                    <ul>
                        {bookings}
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserShow;
