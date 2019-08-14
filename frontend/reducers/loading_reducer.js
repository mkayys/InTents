import {
    RECEIVE_SPOTS,
    RECEIVE_SPOT,
    START_LOADING_ALL_SPOTS,
    START_LOADING_SINGLE_SPOT
} from '../actions/spot_actions';

const initialState = {
    indexLoading: false,
    detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPOTS:
            return Object.assign({}, state, { indexLoading: false });
        case START_LOADING_ALL_SPOTS:
            return Object.assign({}, state, { indexLoading: true });
        case RECEIVE_SPOT:
            return Object.assign({}, state, { detailLoading: false });
        case START_LOADING_SINGLE_SPOT:
            return Object.assign({}, state, { detailLoading: true });
        default:
            return state;
    }
};

export default loadingReducer;