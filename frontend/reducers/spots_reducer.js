import {
    RECEIVE_SPOTS,
    RECEIVE_SPOT
} from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_SPOTS:
            nextState = merge({}, state, action.spots);
            return nextState;
        case RECEIVE_SPOT:
            nextState[action.spot.id] = action.spot;
            return nextState;
        default:
            return state;
    }
};

export default spotsReducer;