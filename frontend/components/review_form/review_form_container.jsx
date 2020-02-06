import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview, updateReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';

import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
    return {
        // errors: state.errors.review,
        loggedIn: !!state.session.currentUserId,
        type: ownProps.type,
        errors: state.errors.review
        // currentUser: currentUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // createReview: (review) => dispatch(createReview(review)),
        // clearErrors: () => dispatch(clearErrors()),
        // requireLogin: () => dispatch(openModal('login')),
        // updateReview: (review) => dispatch(updateReview(review))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));