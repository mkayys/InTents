import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    // const currentUser = state.session.currentUserId ? currentUserId : 'none';
    return {
        errors: state.errors.booking,
        loggedIn: !!state.session.currentUserId
        // currentUser: currentUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createReview: (review) => dispatch(createReview(review)),
        clearErrors: () => dispatch(clearErrors()),
        requireLogin: () => dispatch(openModal('login'))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));