import { actionTypes } from "../types";

const initialState = {
    user: null,
    playlist: null,
}

const spotifyUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_SPOTIFY_USER:
            return { ...state, user: payload };
        case actionTypes.SET_SPOTIFY_USER_PLAYLIST:
            return { ...state, playlist: payload };
        default:
            return state;
    }
}

export {
    spotifyUser,
}