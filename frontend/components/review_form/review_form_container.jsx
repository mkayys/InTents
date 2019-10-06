import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    // const currentUser = state.session.currentUserId ? currentUserId : 'none';
    return {
        maxGuests: ownProps.spot.maxGuests,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));