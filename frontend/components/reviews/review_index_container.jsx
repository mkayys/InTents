import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = state => ({
    reviews: Object.values(state.entities.reviews)
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
