import {
    RECEIVE_CREATE_REVIEW_ERRORS,
    RECEIVE_EDIT_REVIEW_ERRORS,
    // RECEIVE_BOOKING,
    CLEAR_ERRORS
} from '../actions/review_actions';

const reviewErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CREATE_REVIEW_ERRORS:
            return {'create': action.errors};
        case RECEIVE_EDIT_REVIEW_ERRORS:
            return {'edit': action.errors};
        // case RECEIVE_REVIEW_ERRORS:
        //     return action.errors;
        // case RECEIVE_BOOKING:
        //     return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default reviewErrorsReducer;