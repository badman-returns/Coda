import { actionTypes } from "../types";

const initialState = {
    token: null,
}

const spotifyToken = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_TOKEN:
            return { ...state, token: payload };
        default: 
            return state;
    }
}

export {
    spotifyToken,
}