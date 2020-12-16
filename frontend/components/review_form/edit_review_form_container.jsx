import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateReview, clearErrors } from '../../actions/review_actions';
// import { openModal } from '../../actions/modal_actions';
import { checkIfEdit } from '../../reducers/review_errors_selector';


import EditReviewForm from './edit_review_form';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        // errors: state.errors.review,
        loggedIn: !!state.session.currentUserId,
        // type: ownProps.type,
        errors: checkIfEdit(state.errors.review),
        // currentUser: currentUser
        spotId: ownProps.spotId,
        //review only if from edit
        // review: ownProps.review
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // createReview: (review) => dispatch(createReview(review)),
        clearErrors: () => dispatch(clearErrors()),
        // requireLogin: () => dispatch(openModal('login')),
        updateReview: (review) => dispatch(updateReview(review))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReviewForm));