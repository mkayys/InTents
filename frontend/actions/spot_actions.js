import * as SpotApiUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

//loading actions:

export const START_LOADING_ALL_SPOTS = 'START_LOADING_ALL_SPOTS';
export const START_LOADING_SINGLE_SPOT = 'START_LOADING_SINGLE_SPOT';


export const startLoadingAllSpots = () => ({
    type: START_LOADING_ALL_SPOTS
});

export const startLoadingSingleSpot = () => ({
    type: START_LOADING_SINGLE_SPOT
});

//


export const fetchSpots = () => dispatch => {

    //loading:
    dispatch(startLoadingAllSpots());
    //end

    return SpotApiUtil.fetchSpots()
        .then(spots => dispatch(receiveSpots(spots)))
};

export const fetchSpot = (id) => dispatch => {

    //loading:
    dispatch(startLoadingSingleSpot());
    //end

    return SpotApiUtil.fetchSpot(id)
        .then(spot => dispatch(receiveSpot(spot)))
};

export const receiveSpots = (spots) => ({
    type: RECEIVE_SPOTS,
    spots
});

export const receiveSpot = (payload) => ({
    type: RECEIVE_SPOT,
    payload
});