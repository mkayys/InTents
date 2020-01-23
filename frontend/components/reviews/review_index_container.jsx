import { connect } from 'react-redux';
import { fetchReviews, fetchReviewsForSpot, deleteReview, updateReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = state => ({
    reviews: Object.values(state.entities.reviews),
    users: Object.values(state.entities.users),
    currentUserId: state.session.currentUserId
    // loggedIn: !!state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    fetchReviewsForSpot: (spotId) => dispatch(fetchReviewsForSpot(spotId)),
    deleteReview: (id) => dispatch(deleteReview(id)),
    updateReview: (review) => dispatch(updateReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);

