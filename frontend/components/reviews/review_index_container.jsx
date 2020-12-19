import { connect } from 'react-redux';
import { fetchReviews, fetchReviewsForSpot, deleteReview, updateReview, createReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import { openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/review_actions';
import { mostRecentFirst } from '../../reducers/reviews_selector';

const mapStateToProps = state => ({
    reviews: mostRecentFirst(state.entities.reviews),
    users: Object.values(state.entities.users),
    currentUserId: state.session.currentUserId,
    loggedIn: !!state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    fetchReviewsForSpot: (spotId) => dispatch(fetchReviewsForSpot(spotId)),
    deleteReview: (id) => dispatch(deleteReview(id)),
    updateReview: (review) => dispatch(updateReview(review)),
    requireLogin: () => dispatch(openModal('login')),
    createReview: (review) => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);

