import {
    RECEIVE_REVIEWS,
    RECEIVE_REVIEW,
    REMOVE_REVIEW,
} from '../actions/review_actions';
import { RECEIVE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SPOTS:
            nextState = merge({}, state, action.spots);
            return nextState;
        case RECEIVE_SPOT:
            return merge({}, state, action.payload.spots);
        case RECEIVE_USER:
            return merge({}, state, action.payload.spots)
        default:
            return state;
    }
};

export default reviewsReducer;