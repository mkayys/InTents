import * as SpotApiUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';


export const fetchPosts = () => dispatch => (
    SpotApiUtil.fetchSpots()
        .then(spots => dispatch(receiveSpots(spots)))
);

export const fetchPost = (id) => dispatch => (
    SpotApiUtil.fetchSpots(id)
        .then(spot => dispatch(receiveSpot(spot)))
);

export const receiveSpots = (spots) => ({
    type: RECEIVE_SPOTS,
    spots
});

export const receiveSpot = (spot) => ({
    type: RECEIVE_SPOT,
    spot
});