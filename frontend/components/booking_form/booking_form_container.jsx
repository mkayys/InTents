import { connect } from 'react-redux';
import React from 'react';
import { createBooking } from '../../actions/booking_actions';
import BookingForm from './booking_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.booking,
        formType: 'Create Booking'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (booking) => dispatch(createBooking(booking)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);