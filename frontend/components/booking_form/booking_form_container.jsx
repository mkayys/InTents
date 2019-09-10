import { connect } from 'react-redux';
import React from 'react';
import { createBooking, clearErrors } from '../../actions/booking_actions';
import BookingForm from './booking_form';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    // const currentUser = state.session.currentUserId ? currentUserId : 'none';
    return {
        errors: state.errors.booking,
        formType: 'Create Booking',
        loggedIn: !!state.session.currentUserId
        // currentUser: currentUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (booking) => dispatch(createBooking(booking)),
        clearErrors: () => dispatch(clearErrors()),
        requireLogin: () => dispatch(openModal('login'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);