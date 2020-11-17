import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW,
} from '../actions/review_actions';
// import { RECEIVE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.payload.reviews;
        case RECEIVE_REVIEW:
            return merge({}, state, action.payload.reviews);
        case REMOVE_REVIEW:
            let nextState = Object.assign({}, state);
            delete nextState[action.reviewId]
            return nextState;
        // case RECEIVE_SPOT:
        //     return action.payload.reviews;
        default:
            return state;
    }
};

export default reviewsReducer;