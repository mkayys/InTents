import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

// need reviews errors

const receiveReviews = (payload) => ({
    type: RECEIVE_REVIEWS,
    payload
});

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    reviewId: review.id
});

// testing

export const fetchReviewsForSpot = (spotId) => dispatch => (
    ReviewApiUtil.fetchReviewsForSpot(spotId)
        .then(payload => dispatch(receiveReviews(payload)))
);

//
export const fetchReviews = () => dispatch => (
    ReviewApiUtil.fetchReviews()
        .then(payload => dispatch(receiveReviews(payload)))
);


export const fetchReview = (id) => dispatch => (
    ReviewApiUtil.fetchReview(id)
        .then(review => dispatch(receiveReview(review)))
);

export const createReview = (review) => dispatch => (
    ReviewApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)),
            err => (
                console.log(err.responseJSON)
            ))
);


export const updateReview = (review) => dispatch => (
    ReviewApiUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)),
            err => (
                console.log(err.responseJSON)
            ))
);

export const deleteReview = (id) => dispatch => (
    ReviewApiUtil.deleteReview(id)
        .then(review => dispatch(removeReview(review)))
);


