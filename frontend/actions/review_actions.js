import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

// need reviews errors

const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

const removeBooking = (booking) => ({
    type: REMOVE_REVIEW,
    bookingId: booking.id
});

export const fetchReviews = () => dispatch => (
    ReviewApiUtil.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)))
);