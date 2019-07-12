import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { deleteBooking } from '../../actions/booking_actions';
import UserShow from './user_show';

const mapStateToProps = (state) => {
    const userId = state.session.currentUserId;
    const user = userId ? state.entities.users[userId] : {};

    return ({
        userId: userId,
        user: user,
        bookings: Object.values(state.entities.bookings),
        spots: Object.values(state.entities.spots)
    });
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    deleteBooking: (id) => dispatch(deleteBooking(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);