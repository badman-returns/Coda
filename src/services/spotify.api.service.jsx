const dotenv = require('dotenv');

dotenv.config();

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-modify-public",
    "user-library-read",
    "user-library-modify",
    "streaming"
]

export function getTokenFromResponse() {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

export const authURL = `${process.env.REACT_APP_AUTHORIZATION_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;