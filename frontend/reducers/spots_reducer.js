import {
    RECEIVE_SPOTS,
    RECEIVE_SPOT
} from '../actions/spot_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const spotsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch(action.type) {
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

export default spotsReducer;