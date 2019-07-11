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
    // return {
    //     processForm: (user) => dispatch(login(user)),
    //     otherForm: (
    //         <button className='login-to-signup' onClick={() => dispatch(openModal('signup'))}>
    //             Sign up
    //         </button>
    //     ),
    //     closeModal: () => dispatch(closeModal()),
    //     clearErrors: () => dispatch(clearErrors())
    // };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);