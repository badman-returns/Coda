import { actionTypes } from '../types';

const setSpotifyUser = (user) => {
    return {
        type: actionTypes.SET_SPOTIFY_USER,
        payload: user,
    };
}

const setSpotifyUserPlaylist = (playlist) => {
    return{
        type: actionTypes.SET_SPOTIFY_USER_PLAYLIST,
        payload: playlist,
    }
}

export {
    setSpotifyUser,
    setSpotifyUserPlaylist
}