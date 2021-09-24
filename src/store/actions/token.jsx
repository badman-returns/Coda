import { actionTypes } from '../types';

const setSpotifyToken = (token) => {
    return {
        type: actionTypes.SET_TOKEN,
        payload: token,
    };
}

export {
    setSpotifyToken
}