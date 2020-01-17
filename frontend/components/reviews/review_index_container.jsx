import { connect } from 'react-redux';
import { fetchReviews, fetchReviewsForSpot, deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = state => ({
    reviews: Object.values(state.entities.reviews),
    users: Object.values(state.entities.users),
    currentUserId: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    fetchReviewsForSpot: (spotId) => dispatch(fetchReviewsForSpot(spotId)),
    deleteReview: (id) => dispatch(deleteReview(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);

