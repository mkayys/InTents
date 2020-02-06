import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

// need reviews errors

const receiveReviews = (payload) => ({
    type: RECEIVE_REVIEWS,
    payload
});

const receiveReview = (payload) => ({
    type: RECEIVE_REVIEW,
    payload
});

const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    reviewId: review.id
});

const receiveErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
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
        .then(payload => dispatch(receiveReview(payload)),
            err => (
                // console.log(err.responseJSON)
                dispatch(receiveErrors(err.responseJSON))
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


