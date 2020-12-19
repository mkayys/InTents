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

        const bookings = this.props.bookings.map(booking => {
            let spot = undefined;
            this.props.spots.forEach( potentialSpot => {
                if (booking.spotId === potentialSpot.id) {

                    spot = potentialSpot;
                }
            })
            return (
                <BookingIndexItem
                    key={booking.id}
                    booking={booking}
                    spot={spot}
                    deleteBooking={this.props.deleteBooking} />
            )

        });
        

        return (
            <div className="user-profile-background">
                <div className='user-profile'>
                    <div className='user-info'>
                        <div className='user-name-and-pic'>
                            <img className='user-pic' src='https://in-tents-seed.s3-us-west-1.amazonaws.com/main_images/main-icon.png' />
                            <span className='user-name'>
                                {this.props.user.firstName} {this.props.user.lastName[0]}.
                        </span>
                            <div className='user-info'>
                                <i className="fas fa-mountain"></i>Tent-a-holic for {this.props.user.joined}
                        </div>
                        </div>
                    </div>



                    <div className='user-bookings-list'>
                        <ul className='list-bookings'>
                            {bookings.length === 0 ? "Start booking your adventures!" : bookings}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserShow;
